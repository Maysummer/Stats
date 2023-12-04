import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

//find how many times man united wins
let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`ManU won ${manUnitedWins} games`);
