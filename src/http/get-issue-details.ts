import { api } from '@/lib/axios'

interface GetIssueDetailsParams {
  project: string
  issueNumber: number
}

interface PostDetails {
  number: number
  title: string
  body: string
  user: {
    login: string
  }
  comments: number
  created_at: string
  html_url: string
}

export async function getIssueDetails({ project, issueNumber }: GetIssueDetailsParams) {
  const response = await api.get<PostDetails>(`/repos/${project}/issues/${issueNumber}`)

  return response.data
}
