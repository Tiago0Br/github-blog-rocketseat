import { api } from '@/lib/axios'

export interface GithubProfileData {
  login: string
  name: string
  bio: string
  company: string | null
  followers: number
  avatar_url: string
}

export async function getProfileData() {
  const response = await api.get<GithubProfileData>('/users/Tiago0Br')
  return response.data
}
