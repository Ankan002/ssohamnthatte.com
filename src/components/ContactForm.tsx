"use client";

import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Background
} from "@once-ui-system/core";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you for your message! I'll get back to you soon.");
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Flex 
      fillWidth 
      padding="xl" 
      background="surface" 
      border="neutral-alpha-weak" 
      radius="l"
      style={{
        backdropFilter: "blur(20px) saturate(150%)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        position: "relative",
        overflow: "hidden",
      }}
      className="contact-form-card"
    >
      <Column fillWidth gap="l" style={{ position: "relative", zIndex: 1 }}>
        <Heading variant="heading-strong-l">
          Send me a message
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          I'm always open to discussing new opportunities, collaborations, or just 
          having a conversation about design and technology.
        </Text>
        
        <form onSubmit={handleSubmit}>
          <Column fillWidth gap="m">
            {/* Compact Name and Email on same line */}
            <Flex gap="m" wrap>
              <Column gap="s" style={{ flex: 1, minWidth: "200px" }}>
                <Text variant="label-default-s" onBackground="neutral-medium">
                  Name
                </Text>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid var(--neutral-alpha-medium)",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "var(--neutral-on-background-strong)",
                    fontSize: "14px",
                    width: "100%",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease"
                  }}
                  placeholder="Your name"
                />
              </Column>
              
              <Column gap="s" style={{ flex: 1, minWidth: "200px" }}>
                <Text variant="label-default-s" onBackground="neutral-medium">
                  Email
                </Text>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid var(--neutral-alpha-medium)",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "var(--neutral-on-background-strong)",
                    fontSize: "14px",
                    width: "100%",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease"
                  }}
                  placeholder="your.email@example.com"
                />
              </Column>
            </Flex>
            
            <Column gap="s">
              <Text variant="label-default-s" onBackground="neutral-medium">
                Message
              </Text>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid var(--neutral-alpha-medium)",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "var(--neutral-on-background-strong)",
                  fontSize: "14px",
                  width: "100%",
                  resize: "vertical",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit"
                }}
                placeholder="Tell me about your project or just say hello..."
              />
            </Column>
            
            <Column gap="m" style={{ marginTop: "16px" }}>
              {/* Primary Action - Send Message */}
              <Button
                type="submit"
                variant="primary"
                size="l"
                disabled={isSubmitting}
                prefixIcon="email"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </Column>
          </Column>
        </form>
      </Column>
    </Flex>
  );
}; 