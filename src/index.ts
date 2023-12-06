import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HTMLReport';

const matchReader = MatchReader.fromCSV('football.csv')
const summary = Summary.winsAnalysisWithHTMLReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
