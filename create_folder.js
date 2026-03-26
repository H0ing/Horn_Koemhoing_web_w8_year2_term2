const { execSync } = require('child_process');


for (let i = 1; i <= 5; i++) {
  const projectName = `Lab8_${i}`;
  console.log(`Creating ${projectName}...`);
  
  try {
    
    
    execSync(`npm create vite@latest ${projectName} -- --template react`, {
      stdio: 'inherit'
    });
    console.log(`✓ ${projectName} created`);
  } catch (error) {
    
    console.error(`✗ Failed to create ${projectName}`);
  }
}
