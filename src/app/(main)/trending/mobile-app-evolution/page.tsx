"use client";
import { Heading, Text, Column } from "@once-ui-system/core";
import React from "react";

export default function MobileAppEvolution() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a1a2f 0%, #1e3a5c 60%, #3a5fa8 100%)' }}>
      <Column maxWidth="l" horizontal="center" gap="l" align="center" style={{ marginTop: '10vh', marginBottom: 40 }}>
        <Heading variant="display-strong-xl" style={{ color: '#6ea8ff', textAlign: 'center', marginBottom: 18 }}>
          Mobile App Evolution
        </Heading>
        <Text style={{ color: '#fff', fontSize: 22, textAlign: 'justify', maxWidth: 1450 }}>
          The mobile app industry is witnessing an exciting evolution, with AI integration, cross-platform development, and new user experience paradigms. Explore how mobile apps are becoming smarter, more accessible, and more powerful than ever before.
        </Text>
      </Column>
      <Column maxWidth="l" gap="xl" style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 24, padding: 36, boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)' }}>
        <Text style={{ color: '#fff', fontSize: 18, marginBottom: 24 }}>
          <b>AI-Powered Features</b>
          <br /><br />From voice assistants to personalized recommendations, AI is making apps more intuitive and responsive to user needs.
          <br /><br /><b>Cross-Platform Development</b>
          <br /><br />Frameworks like Flutter and React Native allow developers to build apps for multiple platforms from a single codebase, reducing costs and speeding up releases.
          <br /><br /><b>Enhanced User Experience</b>
          <br /><br />Gesture navigation, dark mode, and adaptive layouts are just a few ways mobile apps are delivering richer, more engaging experiences.
        </Text>
      </Column>
    </Column>
  );
} 