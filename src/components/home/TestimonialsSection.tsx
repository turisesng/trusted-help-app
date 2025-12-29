import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Adaora Okonkwo",
    role: "Homeowner, Lagos",
    content: "TrustedHelp gave us a wonderful live-in maid. The verification process was thorough and we've had zero issues for 8 months now.",
    rating: 5,
  },
  {
    name: "Dr. Chukwudi Eze",
    role: "Family Home, Abuja",
    content: "The replacement guarantee gave us confidence to try their service. Our driver is professional and punctual every single day.",
    rating: 5,
  },
  {
    name: "Mrs. Folake Adeleke",
    role: "Estate Resident, Ibadan",
    content: "Finding a trustworthy caregiver for my mother was stressful until we found TrustedHelp. They made the process so easy.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding gradient-warm">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Nigerian Families
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from families who have found peace of mind with our verified domestic staff.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
