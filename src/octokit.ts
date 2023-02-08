import { getOctokit } from "@actions/github"

const githubActionsDefaultToken = process.env.GITHUB_TOKEN
const personalAccessToken = process.env.PERSONAL_ACCESS_TOKEN as string

export const octokit = getOctokit(githubActionsDefaultToken as string)
export const octokitUsingPAT = isPersonalAccessTokenPresent()
  ? getOctokit(personalAccessToken as string)
  : octokit

export function isPersonalAccessTokenPresent(): boolean {
  let isPersonalAccessTokenPresent = true
  if (personalAccessToken != "") {
    console.log("I am called")
    isPersonalAccessTokenPresent = false
    return isPersonalAccessTokenPresent
  }
  console.log("I am called2")
  return isPersonalAccessTokenPresent
}
