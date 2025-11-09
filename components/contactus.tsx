import React from "react";
import Link from "next/link";
import AnimatedSection from "./animation";

const ContactUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="bg-primary rounded-2xl p-12 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who have transformed their
              business with our solutions.
            </p>
            <Link href="/contact">
              <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1">
                Get a Quote !
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactUs;