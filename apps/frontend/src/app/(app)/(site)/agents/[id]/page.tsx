import { Metadata } from 'next';
import { Agent } from '@signalcast/frontend/components/agents/agent';
import { AgentChat } from '@signalcast/frontend/components/agents/agent.chat';
export const metadata: Metadata = {
  title: 'Signalcast - Agent',
  description: '',
};
export default async function Page() {
  return (
    <AgentChat />
  );
}
