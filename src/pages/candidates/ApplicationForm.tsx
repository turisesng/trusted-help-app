import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { User, Briefcase, FileText, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const CandidateApplication = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    state: "",
    lga: "",
    roleApplying: "",
    experience: "",
    skills: [] as string[],
    previousEmployer: "",
    reasonForLeaving: "",
    expectedSalary: "",
    availability: "",
    hasGuarantor: false,
    hasValidID: false,
    willingToRelocate: false,
    agreeToBackgroundCheck: false,
    profileImageFile: null as File | null,
    profileImageUrl: "",
    demoVideoFile: null as Blob | null,
    demoVideoUrl: "",
  });

  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const liveStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Revoke previous video preview URL when component unmounts or URL changes
    return () => {
      if (videoPreviewUrl) URL.revokeObjectURL(videoPreviewUrl);
    };
  }, [videoPreviewUrl]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isRecording && liveStreamRef.current) {
      videoElement.src = ""; 
      videoElement.srcObject = liveStreamRef.current;
      videoElement.muted = true; 
      videoElement.play().catch(e => console.error("Live play error:", e));
    } else if (videoPreviewUrl) {
      videoElement.srcObject = null; 
      videoElement.src = videoPreviewUrl;
      videoElement.muted = false; 
      videoElement.load();
    } else {
      videoElement.srcObject = null;
      videoElement.src = "";
    }
  }, [isRecording, videoPreviewUrl]);

  const skillOptions = [
    "Cooking", "Cleaning", "Laundry", "Childcare", "Elderly Care",
    "Driving", "Security", "Serving", "Gardening", "First Aid",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      "firstName", "lastName", "phone", "dateOfBirth", "gender",
      "address", "state", "roleApplying", "experience", "availability",
    ];
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        toast({
          title: "Missing Information",
          description: `Please fill in the required field: ${field}`,
          variant: "destructive",
        });
        return;
      }
    }

    if (!formData.agreeToBackgroundCheck) {
      toast({
        title: "Consent Required",
        description: "You must agree to the background check to submit your application.",
        variant: "destructive",
      });
      return;
    }

    try {
      let uploadedProfileImageUrl = formData.profileImageUrl;
      if (formData.profileImageFile) {
        uploadedProfileImageUrl = await uploadImage(formData.profileImageFile);
        if (!uploadedProfileImageUrl) return;
      }

      let uploadedDemoVideoUrl = formData.demoVideoUrl;
      if (formData.demoVideoFile) {
        uploadedDemoVideoUrl = await uploadVideo(formData.demoVideoFile);
        if (!uploadedDemoVideoUrl) return;
      }

      const { data, error } = await supabase.from('candidates').insert([
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          dateOfBirth: formData.dateOfBirth,
          gender: formData.gender,
          address: formData.address,
          state: formData.state,
          lga: formData.lga,
          roleApplying: formData.roleApplying,
          experience: formData.experience,
          skills: formData.skills,
          previousEmployer: formData.previousEmployer,
          reasonForLeaving: formData.reasonForLeaving,
          expectedSalary: formData.expectedSalary,
          availability: formData.availability,
          hasGuarantor: formData.hasGuarantor,
          hasValidID: formData.hasValidID,
          willingToRelocate: formData.willingToRelocate,
          agreeToBackgroundCheck: formData.agreeToBackgroundCheck,
          profile_image_url: uploadedProfileImageUrl,
          demo_video_url: uploadedDemoVideoUrl,
        },
      ]);

      if (error) {
        console.error("Supabase insert error:", error);
        toast({ title: "Submission Error", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Application Submitted!", description: "We'll review your application soon." });
        setStep(4);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({ title: "Submission Error", description: "An unexpected error occurred.", variant: "destructive" });
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) { 
        toast({ title: "File too large", description: "Limit is 2MB.", variant: "destructive" });
        return;
      }
      setFormData((prev) => ({ ...prev, profileImageFile: file }));
    }
  };

  const uploadImage = async (file: File) => {
    if (!file) return "";
    const filePath = `profile_images/${formData.firstName}-${Date.now()}.${file.name.split('.').pop()}`;
    const { error } = await supabase.storage.from('candidate-profile-images').upload(filePath, file);
    if (error) return "";
    const { data } = supabase.storage.from('candidate-profile-images').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const startRecording = async () => {
    setRecordedChunks([]);
    setVideoPreviewUrl(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      liveStreamRef.current = stream;
      const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
      const internalChunks: Blob[] = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          internalChunks.push(event.data);
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(internalChunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        setVideoPreviewUrl(url);
        setFormData((prev) => ({ ...prev, demoVideoFile: blob }));
        if (liveStreamRef.current) {
          liveStreamRef.current.getTracks().forEach(track => track.stop());
          liveStreamRef.current = null;
        }
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      toast({ title: "Recording Error", description: "Microphone access denied.", variant: "destructive" });
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      if (liveStreamRef.current) {
        liveStreamRef.current.getTracks().forEach(track => track.stop());
      }
      setIsRecording(false);
      setMediaRecorder(null);
    }
  };

  const uploadVideo = async (file: Blob) => {
    if (!file) return "";
    const filePath = `demo_videos/${formData.firstName}-${Date.now()}.webm`;
    const { error } = await supabase.storage.from('candidate-demo-videos').upload(filePath, file, {
      contentType: 'video/webm',
    });
    if (error) return "";
    const { data } = supabase.storage.from('candidate-demo-videos').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Experience", icon: Briefcase },
    { number: 3, title: "Documents", icon: FileText },
    { number: 4, title: "Complete", icon: CheckCircle },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Apply as Domestic Worker | TrustedHelp Nigeria</title>
      </Helmet>

      <section className="bg-gradient-to-br from-accent/10 via-background to-primary/5 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Join Our Team</h1>
        <p className="text-muted-foreground">Become a verified domestic worker today</p>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex justify-between">
            {steps.map((s) => (
              <div key={s.number} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= s.number ? "bg-accent text-white" : "bg-muted text-muted-foreground"}`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <span className="text-sm">{s.title}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent transition-all duration-300" style={{ width: `${((step - 1) / 3) * 100}%` }} />
          </div>
        </div>

        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl mx-auto">
          {step === 1 && (
            <div className="bg-card rounded-2xl p-8 shadow-lg border space-y-4">
              <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label>First Name *</Label><Input value={formData.firstName} onChange={(e) => updateFormData("firstName", e.target.value)} /></div>
                <div><Label>Last Name *</Label><Input value={formData.lastName} onChange={(e) => updateFormData("lastName", e.target.value)} /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label>Email</Label><Input type="email" value={formData.email} onChange={(e) => updateFormData("email", e.target.value)} /></div>
                <div><Label>Phone *</Label><Input value={formData.phone} onChange={(e) => updateFormData("phone", e.target.value)} /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label>DOB *</Label><Input type="date" value={formData.dateOfBirth} onChange={(e) => updateFormData("dateOfBirth", e.target.value)} /></div>
                <div><Label>Gender *</Label>
                  <Select onValueChange={(v) => updateFormData("gender", v)}>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent><SelectItem value="male">Male</SelectItem><SelectItem value="female">Female</SelectItem></SelectContent>
                  </Select>
                </div>
              </div>
              <div><Label>Address *</Label><Textarea value={formData.address} onChange={(e) => updateFormData("address", e.target.value)} /></div>
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label>State *</Label>
                  <Select onValueChange={(v) => updateFormData("state", v)}>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent><SelectItem value="lagos">Lagos</SelectItem><SelectItem value="abuja">Abuja</SelectItem></SelectContent>
                  </Select>
                </div>
                <div><Label>LGA</Label><Input value={formData.lga} onChange={(e) => updateFormData("lga", e.target.value)} /></div>
              </div>
              <Button onClick={() => setStep(2)} className="w-full mt-4">Continue</Button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-card rounded-2xl p-8 shadow-lg border space-y-4">
              <h2 className="text-2xl font-semibold mb-6">Experience</h2>
              <div><Label>Role Applying For *</Label>
                <Select onValueChange={(v) => updateFormData("roleApplying", v)}>
                  <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maid">Maid</SelectItem><SelectItem value="cook">Cook</SelectItem>
                    <SelectItem value="driver">Driver</SelectItem><SelectItem value="nanny">Nanny</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div><Label>Years of Experience *</Label>
                <Select onValueChange={(v) => updateFormData("experience", v)}>
                  <SelectTrigger><SelectValue placeholder="Select experience" /></SelectTrigger>
                  <SelectContent><SelectItem value="0-1">0-1 Year</SelectItem><SelectItem value="1-3">1-3 Years</SelectItem><SelectItem value="3+">3+ Years</SelectItem></SelectContent>
                </Select>
              </div>
              <div><Label className="mb-3 block">Skills</Label>
                <div className="grid grid-cols-2 gap-3">
                  {skillOptions.map(skill => (
                    <label key={skill} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer">
                      <Checkbox checked={formData.skills.includes(skill)} onCheckedChange={() => toggleSkill(skill)} />
                      <span className="text-sm">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex gap-4"><Button variant="outline" onClick={() => setStep(1)} className="flex-1">Back</Button><Button onClick={() => setStep(3)} className="flex-1">Continue</Button></div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg border space-y-6">
              <h2 className="text-2xl font-semibold">Verification & Availability</h2>
              <div className="bg-muted p-4 rounded-lg space-y-3">
                <label className="flex items-start gap-3">
                  <Checkbox checked={formData.hasValidID} onCheckedChange={(c) => updateFormData("hasValidID", !!c)} />
                  <span className="text-sm">I have a valid government ID</span>
                </label>
                <label className="flex items-start gap-3">
                  <Checkbox checked={formData.agreeToBackgroundCheck} onCheckedChange={(c) => updateFormData("agreeToBackgroundCheck", !!c)} />
                  <span className="text-sm">I agree to a background check *</span>
                </label>
              </div>

              <div>
                <Label>Video Demo Script</Label>
                <div className="bg-muted p-3 text-sm italic mb-4 rounded italic">"Hello, my name is {formData.firstName || '[Name]'}. I am applying for the {formData.roleApplying || '[Role]'} position..."</div>
                <video ref={videoRef} controls className="w-full mb-4" playsInline muted></video>
                <div className="flex gap-2">
                  <Button type="button" onClick={() => isRecording ? stopRecording() : startRecording()}>{isRecording ? "Stop Recording" : "Start Recording"}</Button>
                  <Button type="button" variant="outline" onClick={() => setVideoPreviewUrl(null)} disabled={!videoPreviewUrl}>Clear</Button>
                </div>
              </div>

              <div>
                <Label>When can you start? *</Label>
                <Select onValueChange={(v) => updateFormData("availability", v)}>
                  <SelectTrigger><SelectValue placeholder="Select availability" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediately">Immediately</SelectItem>
                    <SelectItem value="1-week">Within 1 week</SelectItem>
                    <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4"><Button variant="outline" onClick={() => setStep(2)} className="flex-1">Back</Button><Button type="submit" className="flex-1">Submit Application</Button></div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center p-12 bg-card rounded-2xl border">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Success!</h2>
              <p className="text-muted-foreground">Application submitted. We'll contact you soon.</p>
              <Button className="mt-6" onClick={() => window.location.href="/"}>Home</Button>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default CandidateApplication;