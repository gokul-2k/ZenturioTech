"use client";
import { Heading, Text, Column } from "@once-ui-system/core";
import React from "react";

export default function AiDrivenInnovations() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a1a2f 0%, #1e3a5c 60%, #3a5fa8 100%)' }}>
      <Column maxWidth="l" horizontal="center" gap="l" align="center" style={{ marginTop: '10vh', marginBottom: 40 }}>
        <Heading variant="display-strong-xl" style={{ color: '#6ea8ff', textAlign: 'center', marginBottom: 18 }}>
       Smart Hospitals
        </Heading>
        <Text style={{ color: '#fff', fontSize: 22, textAlign: 'justify', maxWidth: 1450 }}>
        AI is quietly revolutionizing the way hospitals operate—making care more efficient, responsive, and human-centred than ever before. In today’s high-pressure healthcare environment, hospitals face the daily challenge of delivering excellent care amid resource constraints, rising costs, and growing patient demands. AI is stepping in as a powerful ally, not just automating tasks, but helping hospitals run smarter and more compassionately.
        </Text>
      </Column>
      <Column maxWidth="l" gap="xl" style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 24, padding: 36, boxShadow: '0 4px 32px 0 rgba(7,37,73,0.18)' }}>
        <Heading variant="heading-strong-l" style={{ color: '#60a5fa', marginBottom: 12 }}>
        How AI Is Transforming Hospital Operations?
        </Heading>
        <Text style={{ color: '#fff', fontSize: 18, marginBottom: 24 }}>
          <b>Optimising Patient Flow</b>
          <br /><br />
          AI analyses real-time data from emergency rooms, wards, and ICUs to anticipate admissions and discharges. This means beds are allocated dynamically, wait times shrink, and the chaos of overcrowding is replaced with smoother, more predictable care transitions. For patients, this translates to less waiting and a more seamless hospital.
          <br /><br /><b>Intelligent Staff Scheduling</b>
          <br /><br />Gone are the days of manual roster headaches. AI-powered scheduling tools study historical data and predict patient surges, ensuring the right staff are on hand at the right times. This helps prevent burnout, keeps care teams energised, and ensures patients are never left waiting for attention.
          <br /><br /><b>Smart Resource Allocation</b><br /><br />From ICU beds to oxygen tanks, AI forecasts demand by analysing trends and real-time usage. Hospitals can make informed decisions, avoiding shortages and minimising waste so critical resources are always available when needed most.
          <br /><br /><b>Automating Administrative Tasks</b><br/><br/>AI-driven automation takes over repetitive chores like billing, insurance claims, and patient registration. This reduces errors, lightens the administrative load, and lets healthcare professionals devote more time to what matters: caring for patients.
          <br /><br /><b>Predictive Maintenance of Equipment</b><br/><br/>AI keeps a watchful eye on medical devices, predicting breakdowns before they happen. This proactive approach means essential equipment like ventilators and imaging machines remains operational, reducing downtime and ensuring uninterrupted care.
          <br /><br /><b>Data-Driven Decision Making</b><br/><br/>AI sifts through mountains of hospital data, spotting patterns and generating insights. Leaders can make smarter decisions, whether it’s launching a new department or identifying gaps in preventive care, all backed by real evidence.
          <br /><br /><b>Enhancing Patient Safety and Care Quality</b><br/><br/>AI’s ability to catch subtle patterns in patient data leads to earlier interventions and fewer medical errors. For example, AI systems like Sepsis Watch can detect early warning signs of sepsis, enabling faster treatment and saving lives.
        </Text>
        
      </Column>
    </Column>
  );
} 