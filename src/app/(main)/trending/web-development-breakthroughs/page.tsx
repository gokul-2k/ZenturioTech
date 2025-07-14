"use client";
import { Heading, Text, Column } from "@once-ui-system/core";
import React from "react";

export default function WebDevelopmentBreakthroughs() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a1a2f 0%, #1e3a5c 60%, #3a5fa8 100%)' }}>
      <Column maxWidth="l" horizontal="center" gap="l" align="center" style={{ marginTop: '10vh', marginBottom: 40 }}>
        <Heading variant="display-strong-xl" style={{ color: '#6ea8ff', textAlign: 'center', marginBottom: 18 }}>
          Web Development Breakthroughs
        </Heading>
        <Text style={{ color: '#fff', fontSize: 22, textAlign: 'justify', maxWidth: 1450 }}>
          The digital landscape is constantly evolving, with new web technologies shaping the way we build and experience the internet. From progressive web apps to serverless architectures, discover how modern web development is breaking boundaries and enabling richer, faster, and more secure user experiences.
        </Text>
      </Column>
      <Column maxWidth="l" gap="xl" style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 24, padding: 36, boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)' }}>
        <Text style={{ color: '#fff', fontSize: 18, marginBottom: 24 }}>
          <b>Progressive Web Apps (PWAs)</b>
          <br /><br />PWAs combine the best of web and mobile apps, offering offline access, push notifications, and native-like performance. They are transforming how users interact with the web, making experiences more reliable and engaging.
          <br /><br /><b>Serverless Architectures</b>
          <br /><br />By abstracting away server management, serverless platforms let developers focus on code and innovation. This leads to faster deployments, lower costs, and highly scalable applications.
          <br /><br /><b>WebAssembly (Wasm)</b>
          <br /><br />Wasm brings near-native performance to web applications, enabling complex computations and new use cases like gaming, video editing, and more—all within the browser.
          <br /><br /><b>Enhanced Security</b>
          <br /><br />Modern frameworks and protocols are making the web safer, with features like HTTPS, Content Security Policy, and advanced authentication methods protecting users and data.
        </Text>
      </Column>
    </Column>
  );
} 