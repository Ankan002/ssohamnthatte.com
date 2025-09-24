import {
  Column,
  Flex,
  Heading,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Case Studies – Soham Thatte",
    description: "Explore detailed case studies of my design and development projects",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Case Studies")}`,
    path: "/case-studies",
  });
}

export default function CaseStudies() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Case Studies – Soham Thatte"
        description="Explore detailed case studies of my design and development projects"
        path="/case-studies"
        image={`/api/og/generate?title=${encodeURIComponent("Case Studies")}`}
        author={{
          name: person.name,
          url: `${baseURL}/case-studies`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Only MoneyVest card, same as homepage */}
      <Column fillWidth gap="32" paddingY="80">
        <div style={{ height: "24px" }} />
        <Flex
          fillWidth
          horizontal="center"
          style={{ justifyContent: "center" }}
        >
          <div
            className="sophisticated-ui-card"
            style={{
              width: "1000px",
              height: "600px",
              background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
              borderRadius: "24px",
              position: "relative",
              overflow: "hidden",
              boxShadow:
                "0 40px 80px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "-50px",
                width: "200px",
                height: "200px",
                background:
                  "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
                borderRadius: "50%",
                filter: "blur(40px)",
                zIndex: 1,
              }}
            />

            <a href="/case-studies/moneyvest" style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", textDecoration: "none", color: "inherit" }}>
              <div style={{ flex: "35%", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }}></div>
                  <Text style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", fontWeight: "500" }}>Featured Re-design Case Study</Text>
                  <Text style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", fontWeight: "500", display: "block", width: "100%" }}>10 min read</Text>
                </div>

                <Heading style={{ fontSize: "2.4rem", fontWeight: "700", color: "white", marginBottom: "16px", lineHeight: "1.1" }}>
                  MoneyVest Finance App
                </Heading>

                <Text style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.8)", marginBottom: "24px", lineHeight: "1.5" }}>
                  A comprehensive financial management app designed to help users track expenses, manage investments, and achieve their financial goals with intuitive design.
                </Text>

                <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", color: "#3b82f6", background: "rgba(59, 130, 246, 0.2)", padding: "4px 8px", borderRadius: "6px" }}>Webapp</span>
                  <span style={{ fontSize: "12px", color: "#10b981", background: "rgba(16, 185, 129, 0.2)", padding: "4px 8px", borderRadius: "6px" }}>2025</span>
                  <span style={{ fontSize: "12px", color: "#8b5cf6", background: "rgba(139, 92, 246, 0.2)", padding: "4px 8px", borderRadius: "6px" }}>Finance</span>
                </div>

                <a
                  href="/case-studies/moneyvest"
                  className="resume-button"
                  style={{
                    gap: "16px",
                    padding: "16px 32px",
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "16px",
                    color: "rgba(255, 255, 255, 0.95)",
                    fontSize: "16px",
                    fontWeight: "600",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "flex-start",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow:
                      "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  <div
                    className="button-glow"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    }}
                  />

                  <div
                    className="button-shimmer"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                      transition: "transform 0.6s ease",
                    }}
                  />

                  <span style={{ position: "relative", zIndex: 2 }}>Read Case Study</span>
                  <span
                    className="arrow-icon"
                    style={{ fontSize: "18px", position: "relative", zIndex: 2, transition: "transform 0.3s ease" }}
                  >
                    →
                  </span>
                </a>
              </div>

              <div style={{ flex: "65%", padding: "24px", background: "rgba(0, 0, 0, 0.2)", position: "relative" }}>
                <div style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "16px",
                  overflow: "hidden",
                  position: "relative",
                  background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}>
                  <img
                    src="/images/moneyvest.png"
                    alt="MoneyVest Finance App"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", borderRadius: "16px" }}
                  />
                </div>
              </div>
            </a>
          </div>
        </Flex>
      </Column>
      
      {/* Samsung Case Study Card */}
      <Column horizontal="center" gap="l" maxWidth="l" paddingY="xl">
        <Flex
          fillWidth
          horizontal="center"
          style={{
            justifyContent: "center",
          }}
        >
          <div
            className="sophisticated-ui-card"
            style={{
              width: "1000px",
              height: "600px",
              borderRadius: "24px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {/* Full Cover Image Background */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}>
              <img
                src="/images/samsung-casestudy/1.png"
                alt="Samsung Mobile App"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              {/* Sophisticated gradient overlay for better text readability */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 100%)",
              }} />
            </div>
            
            {/* Purple/Blue Glow Effect */}
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "-50px",
                width: "200px",
                height: "200px",
                background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
                borderRadius: "50%",
                filter: "blur(40px)",
                zIndex: 2,
              }}
            />

            <div style={{ 
              position: "relative", 
              zIndex: 3, 
              height: "100%", 
              display: "flex", 
              alignItems: "flex-start",
              padding: "32px"
            }}>
              <div style={{ 
                maxWidth: "500px",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }}></div>
                  <Text style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.9)", fontWeight: "500" }}>Featured Case Study</Text>
                  <Text style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.9)", fontWeight: "500", display: "block", width: "100%" }}>8 min read</Text>
                </div>

                <Heading style={{ fontSize: "2.4rem", fontWeight: "700", color: "white", marginBottom: "16px", lineHeight: "1.1" }}>
                  Samsung Mobile App
                </Heading>

                <Text style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.9)", marginBottom: "24px", lineHeight: "1.5" }}>
                  A comprehensive mobile app design focused on enhancing user experience, improving navigation, and creating a more intuitive interface for Samsung users.
                </Text>

                <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", color: "#3b82f6", background: "rgba(59, 130, 246, 0.3)", padding: "4px 8px", borderRadius: "6px" }}>Mobile App</span>
                  <span style={{ fontSize: "12px", color: "#10b981", background: "rgba(16, 185, 129, 0.3)", padding: "4px 8px", borderRadius: "6px" }}>2025</span>
                  <span style={{ fontSize: "12px", color: "#8b5cf6", background: "rgba(139, 92, 246, 0.3)", padding: "4px 8px", borderRadius: "6px" }}>Technology</span>
                </div>

                <a
                  href="/case-studies/samsung"
                  className="resume-button"
                  style={{
                    gap: "16px",
                    padding: "16px 32px",
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "16px",
                    color: "rgba(255, 255, 255, 0.95)",
                    fontSize: "16px",
                    fontWeight: "600",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "flex-start",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow:
                      "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  <div
                    className="button-glow"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    }}
                  />

                  <div
                    className="button-shimmer"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                      transition: "transform 0.6s ease",
                    }}
                  />

                  <span style={{ position: "relative", zIndex: 2 }}>Read Case Study</span>
                  <span
                    className="arrow-icon"
                    style={{ fontSize: "18px", position: "relative", zIndex: 2, transition: "transform 0.3s ease" }}
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Flex>
      </Column>
      
      {/* AI in UX Case Study Card */}
      <Column horizontal="center" gap="l" maxWidth="l" paddingY="xl">
        <Flex
          fillWidth
          horizontal="center"
          style={{
            justifyContent: "center",
          }}
        >
          <div
            className="sophisticated-ui-card"
            style={{
              width: "1000px",
              height: "600px",
              borderRadius: "24px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {/* Full Cover Image Background */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
              <img
                src="/images/ai-in-ux/1.png"
                alt="AI in UX"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                loading="lazy"
                decoding="async"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 100%)" }} />
            </div>

            {/* Purple/Blue Glow Effect */}
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "-50px",
                width: "200px",
                height: "200px",
                background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
                borderRadius: "50%",
                filter: "blur(40px)",
                zIndex: 2,
              }}
            />

            {/* Content Overlay */}
            <div style={{ position: "relative", zIndex: 3, height: "100%", display: "flex", alignItems: "flex-start", padding: "32px" }}>
              <div style={{
                maxWidth: "500px",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }}></div>
                  <Text style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.9)", fontWeight: "500" }}>Featured Case Study</Text>
                  <Text style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.9)", fontWeight: "500", display: "block", width: "100%" }}>6 min read</Text>
                </div>

                <Heading style={{ fontSize: "2.4rem", fontWeight: "700", color: "white", marginBottom: "16px", lineHeight: "1.1" }}>
                  AI in UX
                </Heading>

                <Text style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.9)", marginBottom: "24px", lineHeight: "1.5" }}>
                  Exploring how AI augments user journeys and shapes modern interface patterns through practical, production-minded design.
                </Text>

                <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", color: "#3b82f6", background: "rgba(59, 130, 246, 0.3)", padding: "4px 8px", borderRadius: "6px" }}>Web</span>
                  <span style={{ fontSize: "12px", color: "#10b981", background: "rgba(16, 185, 129, 0.3)", padding: "4px 8px", borderRadius: "6px" }}>2025</span>
                  <span style={{ fontSize: "12px", color: "#8b5cf6", background: "rgba(139, 92, 246, 0.3)", padding: "4px 8px", borderRadius: "6px" }}>AI</span>
                </div>

                <a
                  href="/case-studies/ai-in-ux"
                  className="resume-button"
                  style={{
                    gap: "16px",
                    padding: "16px 32px",
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "16px",
                    color: "rgba(255, 255, 255, 0.95)",
                    fontSize: "16px",
                    fontWeight: "600",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "flex-start",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  <div className="button-glow" style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)", opacity: 0, transition: "opacity 0.4s ease" }} />
                  <div className="button-shimmer" style={{ position: "absolute", inset: 0, left: "-100%", background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)", transition: "transform 0.6s ease" }} />
                  <span style={{ position: "relative", zIndex: 2 }}>Read Case Study</span>
                  <span className="arrow-icon" style={{ fontSize: "18px", position: "relative", zIndex: 2, transition: "transform 0.3s ease" }}>→</span>
                </a>
              </div>
            </div>
          </div>
        </Flex>
      </Column>
    </Column>
  );
} 