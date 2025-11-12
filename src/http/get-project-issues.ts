import { api } from '@/lib/axios'

export interface Issue {
  title: string
  number: number
  body: string
  created_at: string
}

export interface ProjectIssues {
  total_count: number
  items: Issue[]
}

export async function getProjectIssues(project: string) {
  const response = await api.get<ProjectIssues>('/search/issues', {
    params: {
      q: `is:issue state:open repo:${project}`,
    },
  })

  return response.data
}
