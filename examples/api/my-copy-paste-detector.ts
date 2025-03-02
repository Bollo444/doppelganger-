import { detectClones } from '../../apps/jscpd';

async function runCopyPasteDetection(paths: string[]) {
  try {
    const clones = await detectClones({
      path: paths,
      silent: false, // Set to true to suppress console output
    });

    if (clones && clones.length > 0) {
      console.log('Copy/Paste clones detected:');
      clones.forEach((clone, index) => {
        console.log(`Clone ${index + 1}:`);
        console.log(`  Duplication 1:`);
        console.log(`    File: ${clone.duplicationA.sourceId}`);
        console.log(`    Start Line: ${clone.duplicationA.start.line}, Start Column: ${clone.duplicationA.start.column}`);
        console.log(`    End Line: ${clone.duplicationA.end.line}, End Column: ${clone.duplicationA.end.column}`);
        console.log(`  Duplication 2:`);
        console.log(`    File: ${clone.duplicationB.sourceId}`);
        console.log(`    Start Line: ${clone.duplicationB.start.line}, Start Column: ${clone.duplicationB.start.column}`);
        console.log(`    End Line: ${clone.duplicationB.end.line}, End Column: ${clone.duplicationB.end.column}`);
      });
    } else {
      console.log('No copy/paste clones detected.');
    }
  } catch (error) {
    console.error('Error running copy/paste detection:', error);
  }
}

// Example usage:
const pathsToScan = ['./src', './apps']; // Replace with your project's source code directories
runCopyPasteDetection(pathsToScan);
