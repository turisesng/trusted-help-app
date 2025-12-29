import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
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
  });

  const skillOptions = [
    "Cooking",
    "Cleaning",
    "Laundry",
    "Childcare",
    "Elderly Care",
    "Driving",
    "Security",
    "Serving",
    "Gardening",
    "First Aid",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and contact you soon.",
    });
    setStep(4);
  };

  const updateFormData = (field: string, value: string | boolean | string[]) => {
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
        <meta name="description" content="Join our network of trusted domestic workers. Apply today for jobs as a maid, cook, driver, nanny, or caregiver." />
      </Helmet>

      <section className="bg-gradient-to-br from-accent/10 via-background to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Our Team
            </h1>
            <p className="text-muted-foreground">
              Apply to become a verified domestic worker with TrustedHelp
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Progress Steps */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex justify-between">
              {steps.map((s) => (
                <div key={s.number} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                      step >= s.number
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-sm ${step >= s.number ? "text-foreground" : "text-muted-foreground"}`}>
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl mx-auto"
          >
            {step === 1 && (
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Personal Information</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select onValueChange={(value) => updateFormData("gender", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => updateFormData("address", e.target.value)}
                      placeholder="Enter your current address"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Select onValueChange={(value) => updateFormData("state", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lagos">Lagos</SelectItem>
                          <SelectItem value="abuja">Abuja (FCT)</SelectItem>
                          <SelectItem value="rivers">Rivers</SelectItem>
                          <SelectItem value="oyo">Oyo</SelectItem>
                          <SelectItem value="kano">Kano</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="lga">Local Government Area</Label>
                      <Input
                        id="lga"
                        value={formData.lga}
                        onChange={(e) => updateFormData("lga", e.target.value)}
                        placeholder="Enter LGA"
                      />
                    </div>
                  </div>
                  <Button onClick={() => setStep(2)} className="w-full mt-4">
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Work Experience</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="roleApplying">Position Applying For *</Label>
                    <Select onValueChange={(value) => updateFormData("roleApplying", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maid">Maid / House Help</SelectItem>
                        <SelectItem value="cook">Cook</SelectItem>
                        <SelectItem value="steward">Steward / Housekeeper</SelectItem>
                        <SelectItem value="driver">Driver</SelectItem>
                        <SelectItem value="security">Security Guard</SelectItem>
                        <SelectItem value="nanny">Nanny</SelectItem>
                        <SelectItem value="caregiver">Elderly Caregiver</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Select onValueChange={(value) => updateFormData("experience", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5+">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="mb-3 block">Skills (Select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {skillOptions.map((skill) => (
                        <label
                          key={skill}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            formData.skills.includes(skill)
                              ? "border-accent bg-accent/5"
                              : "border-border hover:border-accent/50"
                          }`}
                        >
                          <Checkbox
                            checked={formData.skills.includes(skill)}
                            onCheckedChange={() => toggleSkill(skill)}
                          />
                          <span className="text-sm">{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="previousEmployer">Previous Employer (Optional)</Label>
                    <Input
                      id="previousEmployer"
                      value={formData.previousEmployer}
                      onChange={(e) => updateFormData("previousEmployer", e.target.value)}
                      placeholder="Name or description of previous employer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expectedSalary">Expected Monthly Salary (₦)</Label>
                    <Select onValueChange={(value) => updateFormData("expectedSalary", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20000-30000">₦20,000 - ₦30,000</SelectItem>
                        <SelectItem value="30000-50000">₦30,000 - ₦50,000</SelectItem>
                        <SelectItem value="50000-80000">₦50,000 - ₦80,000</SelectItem>
                        <SelectItem value="80000+">₦80,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                      Back
                    </Button>
                    <Button onClick={() => setStep(3)} className="flex-1">
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Documents & Verification</h2>
                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Please confirm the following. You'll need to provide these documents during your in-person verification:
                    </p>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <Checkbox
                          checked={formData.hasValidID}
                          onCheckedChange={(checked) => updateFormData("hasValidID", !!checked)}
                        />
                        <span className="text-sm">
                          I have a valid government-issued ID (NIN, Voter's Card, or International Passport)
                        </span>
                      </label>
                      <label className="flex items-start gap-3">
                        <Checkbox
                          checked={formData.hasGuarantor}
                          onCheckedChange={(checked) => updateFormData("hasGuarantor", !!checked)}
                        />
                        <span className="text-sm">
                          I can provide a guarantor with valid identification
                        </span>
                      </label>
                      <label className="flex items-start gap-3">
                        <Checkbox
                          checked={formData.willingToRelocate}
                          onCheckedChange={(checked) => updateFormData("willingToRelocate", !!checked)}
                        />
                        <span className="text-sm">
                          I am willing to relocate for work if required
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="availability">When can you start? *</Label>
                    <Select onValueChange={(value) => updateFormData("availability", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="1-week">Within 1 week</SelectItem>
                        <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <label className="flex items-start gap-3">
                    <Checkbox
                      checked={formData.agreeToBackgroundCheck}
                      onCheckedChange={(checked) => updateFormData("agreeToBackgroundCheck", !!checked)}
                    />
                    <span className="text-sm text-muted-foreground">
                      I consent to a background check and verification of my information. I understand that false information will result in disqualification.
                    </span>
                  </label>
                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                      Back
                    </Button>
                    <Button type="submit" disabled={!formData.agreeToBackgroundCheck} className="flex-1">
                      Submit Application
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Application Submitted!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for applying. We'll review your application and contact you within 3-5 business days to schedule your verification interview.
                </p>
                <Button asChild>
                  <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer">
                    Contact Us on WhatsApp
                  </a>
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CandidateApplication;
