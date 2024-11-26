import { redirect } from 'next/navigation';

export default function Page({ params }) {
  const username = 'erinc-emre'; // Your GitHub username
  
  // If no specific repo is specified, redirect to main GitHub profile
  if (!params.repo || params.repo.length === 0) {
    redirect(`https://github.com/${username}?tab=repositories`);
  }
  
  // Join the repo path segments if multiple are present
  const repoName = params.repo.join('/');
  
  // Redirect to the specific repository
  redirect(`https://github.com/${username}/${repoName}`);
}