const fs = require('fs');

// Simple syntax validator for app.js
try {
    const code = fs.readFileSync('c:/Farm/app.js', 'utf8');

    // Try to parse it
    new Function(code);

    console.log('✓ JavaScript syntax is valid');

    // Check for common issues
    const issues = [];

    // Check for malformed template literals
    if (code.match(/alert`\(/)) {
        issues.push('Found malformed alert with backtick-parenthesis: alert`(');
    }

    // Check for proper alert syntax
    const alertMatches = code.match(/alert\([^)]+\)/g);
    if (alertMatches) {
        console.log(`✓ Found ${alertMatches.length} alert() calls`);
    }

    // Check closing brackets
    const openBraces = (code.match(/{/g) || []).length;
    const closeBraces = (code.match(/}/g) || []).length;
    console.log(`Braces: ${openBraces} open, ${closeBraces} close`);

    if (issues.length > 0) {
        console.log('\n⚠ Issues found:');
        issues.forEach(issue => console.log(`  - ${issue}`));
    } else {
        console.log('✓ No obvious issues found');
    }

} catch (error) {
    console.log('✗ SYNTAX ERROR:', error.message);
    process.exit(1);
}
