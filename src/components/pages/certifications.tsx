"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Building2 } from "lucide-react";
import { certifications } from "@/lib/certifications-data";

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-5xl font-serif tracking-tight leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Certifications
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional certifications demonstrating expertise in mechanical engineering software and tools.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {cert.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4 mr-1" />
                    {cert.issuer}
                  </div>
                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground font-mono">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
