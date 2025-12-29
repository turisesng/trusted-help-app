import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FileText, Plus, Trash2, Download, Eye } from "lucide-react";

const ResumeBuilder = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
    summary: "",
    skills: [] as string[],
    experience: [{ employer: "", role: "", duration: "", duties: "" }],
    education: "",
    languages: [] as string[],
    references: [{ name: "", phone: "", relationship: "" }],
  });

  const skillOptions = [
    "Cooking (Nigerian)",
    "Cooking (Continental)",
    "Cleaning",
    "Laundry & Ironing",
    "Childcare",
    "Elderly Care",
    "First Aid",
    "Driving",
    "Security",
    "Gardening",
    "Serving",
    "Event Support",
  ];

  const languageOptions = ["English", "Yoruba", "Igbo", "Hausa", "Pidgin"];

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

  const toggleLanguage = (language: string) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((l) => l !== language)
        : [...prev.languages, language],
    }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, { employer: "", role: "", duration: "", duties: "" }],
    }));
  };

  const removeExperience = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const updateExperience = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const addReference = () => {
    setFormData((prev) => ({
      ...prev,
      references: [...prev.references, { name: "", phone: "", relationship: "" }],
    }));
  };

  const removeReference = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index),
    }));
  };

  const updateReference = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      references: prev.references.map((ref, i) =>
        i === index ? { ...ref, [field]: value } : ref
      ),
    }));
  };

  const handleDownload = () => {
    toast({
      title: "Resume Downloaded!",
      description: "Your resume has been saved. You can share it with potential employers.",
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Resume Builder | TrustedHelp Nigeria</title>
        <meta name="description" content="Create a professional resume for domestic work positions. Build your resume in minutes and stand out to employers." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Build Your Resume
            </h1>
            <p className="text-muted-foreground">
              Create a professional resume to showcase your skills and experience
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Form Section */}
            <div className="space-y-6">
              {/* Personal Info */}
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        placeholder="+234..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => updateFormData("location", e.target.value)}
                      placeholder="e.g., Lagos, Nigeria"
                    />
                  </div>
                  <div>
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Textarea
                      id="summary"
                      value={formData.summary}
                      onChange={(e) => updateFormData("summary", e.target.value)}
                      placeholder="A brief description of your experience and what you're looking for..."
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">Skills</h2>
                <div className="grid grid-cols-2 gap-2">
                  {skillOptions.map((skill) => (
                    <label
                      key={skill}
                      className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors text-sm ${
                        formData.skills.includes(skill)
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <Checkbox
                        checked={formData.skills.includes(skill)}
                        onCheckedChange={() => toggleSkill(skill)}
                      />
                      <span>{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-foreground">Work Experience</h2>
                  <Button variant="outline" size="sm" onClick={addExperience}>
                    <Plus className="w-4 h-4 mr-1" /> Add
                  </Button>
                </div>
                <div className="space-y-4">
                  {formData.experience.map((exp, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg relative">
                      {formData.experience.length > 1 && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-8 w-8"
                          onClick={() => removeExperience(index)}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      )}
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label>Employer / Family</Label>
                            <Input
                              value={exp.employer}
                              onChange={(e) => updateExperience(index, "employer", e.target.value)}
                              placeholder="e.g., Private Family"
                            />
                          </div>
                          <div>
                            <Label>Your Role</Label>
                            <Input
                              value={exp.role}
                              onChange={(e) => updateExperience(index, "role", e.target.value)}
                              placeholder="e.g., House Maid"
                            />
                          </div>
                        </div>
                        <div>
                          <Label>Duration</Label>
                          <Input
                            value={exp.duration}
                            onChange={(e) => updateExperience(index, "duration", e.target.value)}
                            placeholder="e.g., Jan 2020 - Dec 2022"
                          />
                        </div>
                        <div>
                          <Label>Duties</Label>
                          <Textarea
                            value={exp.duties}
                            onChange={(e) => updateExperience(index, "duties", e.target.value)}
                            placeholder="Describe your main responsibilities..."
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">Languages</h2>
                <div className="flex flex-wrap gap-2">
                  {languageOptions.map((language) => (
                    <label
                      key={language}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full border cursor-pointer transition-colors text-sm ${
                        formData.languages.includes(language)
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <Checkbox
                        checked={formData.languages.includes(language)}
                        onCheckedChange={() => toggleLanguage(language)}
                        className="hidden"
                      />
                      <span>{language}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* References */}
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-foreground">References</h2>
                  <Button variant="outline" size="sm" onClick={addReference}>
                    <Plus className="w-4 h-4 mr-1" /> Add
                  </Button>
                </div>
                <div className="space-y-4">
                  {formData.references.map((ref, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg relative">
                      {formData.references.length > 1 && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-8 w-8"
                          onClick={() => removeReference(index)}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      )}
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <Label>Name</Label>
                          <Input
                            value={ref.name}
                            onChange={(e) => updateReference(index, "name", e.target.value)}
                            placeholder="Full name"
                          />
                        </div>
                        <div>
                          <Label>Phone</Label>
                          <Input
                            value={ref.phone}
                            onChange={(e) => updateReference(index, "phone", e.target.value)}
                            placeholder="+234..."
                          />
                        </div>
                        <div>
                          <Label>Relationship</Label>
                          <Input
                            value={ref.relationship}
                            onChange={(e) => updateReference(index, "relationship", e.target.value)}
                            placeholder="e.g., Former Employer"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button onClick={() => setShowPreview(!showPreview)} variant="outline" className="flex-1">
                  <Eye className="w-4 h-4 mr-2" />
                  {showPreview ? "Hide" : "Show"} Preview
                </Button>
                <Button onClick={handleDownload} className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Preview Section */}
            <div className={`${showPreview ? "block" : "hidden lg:block"}`}>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border sticky top-4">
                <div className="border-b border-border pb-4 mb-4">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {formData.firstName || "First"} {formData.lastName || "Last"}
                  </h1>
                  <div className="text-gray-600 text-sm space-y-1 mt-2">
                    {formData.phone && <p>{formData.phone}</p>}
                    {formData.email && <p>{formData.email}</p>}
                    {formData.location && <p>{formData.location}</p>}
                  </div>
                </div>

                {formData.summary && (
                  <div className="mb-4">
                    <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                      Summary
                    </h2>
                    <p className="text-gray-700 text-sm">{formData.summary}</p>
                  </div>
                )}

                {formData.skills.length > 0 && (
                  <div className="mb-4">
                    <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                      Skills
                    </h2>
                    <div className="flex flex-wrap gap-1">
                      {formData.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {formData.experience.some((exp) => exp.role) && (
                  <div className="mb-4">
                    <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                      Experience
                    </h2>
                    {formData.experience
                      .filter((exp) => exp.role)
                      .map((exp, index) => (
                        <div key={index} className="mb-3">
                          <p className="font-medium text-gray-900 text-sm">{exp.role}</p>
                          <p className="text-gray-600 text-xs">
                            {exp.employer} • {exp.duration}
                          </p>
                          {exp.duties && (
                            <p className="text-gray-700 text-xs mt-1">{exp.duties}</p>
                          )}
                        </div>
                      ))}
                  </div>
                )}

                {formData.languages.length > 0 && (
                  <div className="mb-4">
                    <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                      Languages
                    </h2>
                    <p className="text-gray-700 text-sm">{formData.languages.join(", ")}</p>
                  </div>
                )}

                {formData.references.some((ref) => ref.name) && (
                  <div>
                    <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                      References
                    </h2>
                    {formData.references
                      .filter((ref) => ref.name)
                      .map((ref, index) => (
                        <div key={index} className="text-xs text-gray-700 mb-1">
                          {ref.name} ({ref.relationship}) - {ref.phone}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResumeBuilder;
