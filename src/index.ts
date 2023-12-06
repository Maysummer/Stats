import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HTMLReport';

//Create an object that satisfies the DataReader interface
const csvFileReader = new CSVFileReader('football.csv');

//Create an instance of MatchReader and pass in something that satisfies the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new HTMLReport());

summary.buildAndPrintReport(matchReader.matches);
