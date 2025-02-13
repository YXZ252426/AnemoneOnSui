import {create} from 'zustand';

interface AgentMapping {
  id: string;
  role_id: string;
  nft_id: string;
  address: string;
  created_at: string;
  url?: string;
  description?: string;
  name?: string;
  owner?: string;
}

interface AgentMappingsState {
  AgentMappings: AgentMapping[];
  isLoggedIn: boolean;
  loading: boolean;
  setAgentMappings: (mappings: AgentMapping[]) => void;
  setIsLoggedIn: (loggedIn: boolean) => void;
  setLoading: (loading: boolean) => void;
}

export const useAgentMappingsStore = create<AgentMappingsState>((set) => ({
  AgentMappings: [],
  isLoggedIn: false,
  loading: true,
  setAgentMappings: (mappings) => set({ AgentMappings: mappings }),
  setIsLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
  setLoading: (loading) => set({ loading }),
}));