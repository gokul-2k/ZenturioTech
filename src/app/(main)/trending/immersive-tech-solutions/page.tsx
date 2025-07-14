"use client";
import { Heading, Text, Column } from "@once-ui-system/core";
import React from "react";

export default function ImmersiveTechSolutions() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a1a2f 0%, #1e3a5c 60%, #3a5fa8 100%)' }}>
      <Column maxWidth="l" horizontal="center" gap="l" align="center" style={{ marginTop: '10vh', marginBottom: 40 }}>
        <Heading variant="display-strong-xl" style={{ color: '#6ea8ff', textAlign: 'center', marginBottom: 18 }}>
          Immersive Tech Solutions
        </Heading>
        <Text style={{ color: '#fff', fontSize: 22, textAlign: 'justify', maxWidth: 1450 }}>
          The world of immersive technology, including AR, VR, and the metaverse, is opening up new possibilities for interaction, learning, and entertainment. Discover how these technologies are shaping the future and creating experiences beyond imagination.
        </Text>
      </Column>
      <Column maxWidth="l" gap="xl" style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 24, padding: 36, boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)' }}>
        <Text style={{ color: '#fff', fontSize: 18, marginBottom: 24 }}>
          <b>Augmented Reality (AR)</b>
          <br /><br />AR overlays digital information onto the real world, enhancing how we learn, shop, and play.
          <br /><br /><b>Virtual Reality (VR)</b>
          <br /><br />VR immerses users in fully digital environments, revolutionizing gaming, training, and remote collaboration.
          <br /><br /><b>The Metaverse</b>
          <br /><br />A persistent, shared digital universe where people can interact, work, and create in entirely new ways.
        </Text>
      </Column>
    </Column>
  );
} 