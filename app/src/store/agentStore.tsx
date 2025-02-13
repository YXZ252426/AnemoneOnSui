import { create } from 'zustand';

interface AgentState {
  agentName: string;
  agentLogo: string;
  agentDescription: string;
  isLoading: boolean;
  setAgentName: (name: string) => void;
  setAgentLogo: (logo: string) => void;
  setAgentDescription: (description: string) => void;
  setIsLoading: (loading: boolean) => void;
}

export const useAgentStore = create<AgentState>((set) => ({
  agentName: '',
  agentLogo: '',
  agentDescription: '',
  isLoading: false,
  setAgentName: (name) => set({ agentName: name }),
  setAgentLogo: (logo) => set({ agentLogo: logo }),
  setAgentDescription: (description) => set({ agentDescription: description }),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));