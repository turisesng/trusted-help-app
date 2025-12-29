import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Utensils, 
  Car, 
  Shield as ShieldIcon, 
  Baby, 
  Heart,
  MapPin,
  Calendar,
  Check,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const staffTypes = [
  { id: "housemaid", icon: Home, label: "Housemaid", description: "Cleaning, laundry, household chores" },
  { id: "cook", icon: Utensils, label: "Cook", description: "Meal preparation & kitchen management" },
  { id: "driver", icon: Car, label: "Driver", description: "Personal & family transportation" },
  { id: "security", icon: ShieldIcon, label: "Security Guard", description: "Residential security & gate control" },
  { id: "nanny", icon: Baby, label: "Nanny", description: "Childcare & supervision" },
  { id: "caregiver", icon: Heart, label: "Caregiver", description: "Elderly & special needs care" },
];

const locations = [
  "Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Enugu", "Kaduna", "Other"
];

const arrangements = [
  { id: "live-in", label: "Live-in", description: "Staff lives in your home" },
  { id: "live-out", label: "Live-out", description: "Staff comes daily" },
];

const budgetRanges = [
  "₦30,000 - ₦50,000/month",
  "₦50,000 - ₦80,000/month",
  "₦80,000 - ₦120,000/month",
  "₦120,000+/month",
];

const RequestStaffPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    staffType: "",
    arrangement: "",
    location: "",
    budget: "",
    hasAccommodation: "",
    startDate: "",
    fullName: "",
    phone: "",
    email: "",
    address: "",
    additionalInfo: "",
  });

  const totalSteps = 4;

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request submitted successfully! We'll contact you within 24 hours.");
    // Reset form
    setFormData({
      staffType: "",
      arrangement: "",
      location: "",
      budget: "",
      hasAccommodation: "",
      startDate: "",
      fullName: "",
      phone: "",
      email: "",
      address: "",
      additionalInfo: "",
    });
    setStep(1);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.staffType !== "";
      case 2:
        return formData.arrangement !== "" && formData.location !== "";
      case 3:
        return formData.budget !== "";
      case 4:
        return formData.fullName !== "" && formData.phone !== "";
      default:
        return false;
    }
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-hero py-12 md:py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
              Request Domestic Staff
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
              Fill out this quick form and we'll match you with verified staff within days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
                    s <= step
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {s < step ? <Check className="w-5 h-5" /> : s}
                </div>
              ))}
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-center text-muted-foreground text-sm mt-2">
              Step {step} of {totalSteps}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-medium border border-border/50"
            >
              {/* Step 1: Staff Type */}
              {step === 1 && (
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    What type of staff do you need?
                  </h2>
                  <p className="text-muted-foreground mb-6">Select one option</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {staffTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleSelect("staffType", type.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.staffType === type.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            formData.staffType === type.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground"
                          }`}>
                            <type.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{type.label}</p>
                            <p className="text-sm text-muted-foreground">{type.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Arrangement & Location */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      Living arrangement
                    </h2>
                    <p className="text-muted-foreground mb-4">Will the staff live with you?</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {arrangements.map((arr) => (
                        <button
                          key={arr.id}
                          type="button"
                          onClick={() => handleSelect("arrangement", arr.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.arrangement === arr.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <p className="font-semibold text-foreground">{arr.label}</p>
                          <p className="text-sm text-muted-foreground">{arr.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.arrangement === "live-in" && (
                    <div>
                      <p className="text-muted-foreground mb-4">Do you have accommodation for staff?</p>
                      <div className="flex gap-4">
                        {["Yes", "No"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleSelect("hasAccommodation", opt.toLowerCase())}
                            className={`px-6 py-3 rounded-xl border-2 font-medium transition-all ${
                              formData.hasAccommodation === opt.toLowerCase()
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-border text-muted-foreground hover:border-primary/50"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Your Location
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {locations.map((loc) => (
                        <button
                          key={loc}
                          type="button"
                          onClick={() => handleSelect("location", loc)}
                          className={`px-4 py-2.5 rounded-lg border-2 font-medium text-sm transition-all ${
                            formData.location === loc
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Budget & Timing */}
              {step === 3 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      Budget Range
                    </h2>
                    <p className="text-muted-foreground mb-4">Monthly salary you can offer</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => handleSelect("budget", budget)}
                          className={`px-4 py-4 rounded-xl border-2 font-medium transition-all ${
                            formData.budget === budget
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      When do you need staff?
                    </h3>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Contact Details */}
              {step === 4 && (
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    Your Contact Details
                  </h2>
                  <p className="text-muted-foreground mb-6">We'll reach out to confirm your request</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+234 800 000 0000"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Home Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your home address"
                        className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Additional Information
                      </label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        placeholder="Any specific requirements or preferences..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                {step > 1 ? (
                  <Button type="button" variant="outline" size="lg" onClick={prevStep}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <Button
                    type="button"
                    variant="default"
                    size="lg"
                    onClick={nextStep}
                    disabled={!canProceed()}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    disabled={!canProceed()}
                  >
                    Submit Request
                    <Check className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </motion.div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default RequestStaffPage;
