export async function GET() {
  try {
    // Fetch npm downloads
    const npmResponse = await fetch(
      "https://api.npmjs.org/downloads/point/last-month/create-next-vault"
    );
    const npmData = await npmResponse.json().catch(() => ({ downloads: 0 }));

    // Fetch npm version
    const npmPackageResponse = await fetch(
      "https://registry.npmjs.org/create-next-vault"
    );
    const npmPackageData = await npmPackageResponse
      .json()
      .catch(() => ({ "dist-tags": { latest: "1.0.0" } }));

    // Fetch GitHub stars
    const githubResponse = await fetch(
      "https://api.github.com/repos/youknowom/create-next-vault",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    const githubData = await githubResponse.json().catch(() => ({
      stargazers_count: 0,
    }));

    return Response.json({
      downloads: npmData.downloads || 0,
      version: npmPackageData["dist-tags"]?.latest || "1.0.0",
      stars: githubData.stargazers_count || 0,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return Response.json(
      {
        downloads: 0,
        version: "1.0.0",
        stars: 0,
      },
      { status: 200 }
    );
  }
}

