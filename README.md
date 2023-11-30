- create project dir
- create package.json : npm init -y
- create ts config file : tsc --init
- create src and build folders
- edit ts config file to correctly direct outDir and rootDir
- edit scripts in package.json


challenge - take info from csv file
load info into application
parse, analyse and generate report

learnings
generic types (passing types like arguments)
//T is arbitrary
class HoldAnything<T> {
  data: T;
}
const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;
const holdString = new HoldAnything<string>();
holdNumber.data = 'abcd';

type assertions (make sure its one of the MatchResult values)
//MatchResult is an enum - 
row[5] as MatchResult;