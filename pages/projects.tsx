import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { TopBar } from "../components/Topbar";

interface GithubRepoInfo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  language: string | null;
  hash_issues: boolean;
  has_projects: boolean;
  hash_downloads: boolean;
  has_wiki: boolean;
  has_pages: false;
  has_discussions: false;
  forks_count: 0;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  } | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

interface ProjectProps {
  data: GithubRepoInfo[];
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const request = await fetch("https://api.github.com/users/Emtyffx/repos");
  const data = await request.json();
  return {
    props: {
      data,
    },
  };
};

const Projects: NextPage<ProjectProps> = ({ data }) => {
  return (
    <div className="App container absolute pl-4 top-0 left-0 bottom-0 right-0 transition duration-500">
      <TopBar />

      <h1 className="text-4xl mt-20">My github repos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-0 px-0 w-full mt-3">
        {data &&
          data
            .filter((repo) => !repo.private)
            .map((repo, index) => (
              <Link href={repo.html_url} key={index} className="m-2">
                <Fade triggerOnce duration={1000}>
                  <img
                    src={`https://github-readme-stats.vercel.app/api/pin/?username=${repo.owner.login}&repo=${repo.name}`}
                    alt="Github repo"
                    className="shadow-md"
                  />
                </Fade>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Projects;
