import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(fs: Friend[]) : string[] {
    return fs.map(f => older(f)) 
}

console.log(older(friends[0]))
console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  function addColleague(cs: Colleague[], name: string, position: string, email: string): Colleague[] {
    const highest = highestExtension(cs);
    const newExtension = highest ? highest.contact.extension + 1 : 1;
    const newColleague: Colleague = {
        name: name,
        department: position,
        contact: {
            email: email,
            extension: newExtension
        }
    };
    cs.push(newColleague);
    return cs;
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));