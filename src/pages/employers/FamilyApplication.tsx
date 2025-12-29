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
import { User, Home, FileText, CheckCircle } from "lucide-react";

const FamilyApplication = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    homeType: "",
    householdSize: "",
    staffTypes: [] as string[],
    arrangement: "",
    startDate: "",
    accommodation: "",
    additionalNotes: "",
    agreeTerms: false,
  });

  const staffOptions = [
    "Live-in Maid",
    "Live-out Maid",
    "Cook",
    "Steward",
    "Driver",
    "Security Guard",
    "Nanny",
    "Elderly Caregiver",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24-48 hours to discuss your requirements.",
    });
    setStep(4);
  };

  const updateFormData = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleStaffType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      staffTypes: prev.staffTypes.includes(type)
        ? prev.staffTypes.filter((t) => t !== type)
        : [...prev.staffTypes, type],
    }));
  };

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Household", icon: Home },
    { number: 3, title: "Requirements", icon: FileText },
    { number: 4, title: "Complete", icon: CheckCircle },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Family Application | TrustedHelp Nigeria</title>
        <meta name="description" content="Apply to hire verified domestic staff for your home. Complete our simple application form to get matched with trusted workers." />
      </Helmet>

      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Family Application Form
            </h1>
            <p className="text-muted-foreground">
              Tell us about your household and staffing needs
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
                        ? "bg-primary text-primary-foreground"
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
                className="h-full bg-primary transition-all duration-300"
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
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => updateFormData("fullName", e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
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
                  <Button onClick={() => setStep(2)} className="w-full mt-4">
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Household Details</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Home Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => updateFormData("address", e.target.value)}
                      placeholder="Enter your full address"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => updateFormData("city", e.target.value)}
                        placeholder="e.g., Lagos"
                      />
                    </div>
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
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="homeType">Home Type</Label>
                      <Select onValueChange={(value) => updateFormData("homeType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="duplex">Duplex</SelectItem>
                          <SelectItem value="bungalow">Bungalow</SelectItem>
                          <SelectItem value="estate">Estate House</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="householdSize">Household Size</Label>
                      <Select onValueChange={(value) => updateFormData("householdSize", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How many people?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 people</SelectItem>
                          <SelectItem value="3-4">3-4 people</SelectItem>
                          <SelectItem value="5-6">5-6 people</SelectItem>
                          <SelectItem value="7+">7+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
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
                <h2 className="text-2xl font-semibold text-foreground mb-6">Staffing Requirements</h2>
                <div className="space-y-6">
                  <div>
                    <Label className="mb-3 block">What type of staff do you need? *</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {staffOptions.map((type) => (
                        <label
                          key={type}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            formData.staffTypes.includes(type)
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <Checkbox
                            checked={formData.staffTypes.includes(type)}
                            onCheckedChange={() => toggleStaffType(type)}
                          />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="arrangement">Arrangement Preference</Label>
                      <Select onValueChange={(value) => updateFormData("arrangement", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Live-in or Live-out?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="live-in">Live-in</SelectItem>
                          <SelectItem value="live-out">Live-out</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="startDate">Preferred Start Date</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => updateFormData("startDate", e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={(e) => updateFormData("additionalNotes", e.target.value)}
                      placeholder="Any specific requirements or preferences?"
                      rows={4}
                    />
                  </div>
                  <label className="flex items-start gap-3">
                    <Checkbox
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => updateFormData("agreeTerms", !!checked)}
                    />
                    <span className="text-sm text-muted-foreground">
                      I agree to the terms and conditions and consent to background checks on potential staff members.
                    </span>
                  </label>
                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                      Back
                    </Button>
                    <Button type="submit" disabled={!formData.agreeTerms} className="flex-1">
                      Submit Application
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Application Submitted!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for your application. Our team will review your requirements and contact you within 24-48 hours to discuss the next steps.
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

export default FamilyApplication;
