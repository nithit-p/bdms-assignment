import { Leaderboard } from "@/models/leaderboard";

const leaderboards: Leaderboard[] = [];

export function getLeaderboard(otp?: {
  limit?: number;
  offset?: number;
}): Leaderboard[] {
  const { limit, offset } = otp || {};
  if (limit && offset) {
    return leaderboards.slice(offset, offset + limit);
  }
  return leaderboards;
}

export function addLeaderboard(leaderboard: Leaderboard): void {
  leaderboards.push(leaderboard);
}
