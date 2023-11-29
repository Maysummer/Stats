import { CSVFileReader } from "./CSVFileReader";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

export class MatchReader extends CSVFileReader {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, //type assertion - make sure its one of the MatchResult values
      row[6],
    ];
  }
}