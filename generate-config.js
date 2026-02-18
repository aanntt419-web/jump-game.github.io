// Vercel 빌드 시 Supabase 환경변수로 config.js 생성
const fs = require('fs');
const path = require('path');

const config = `// Supabase 점프게임 연동 설정 (빌드 시 자동 생성)
const SUPABASE_CONFIG = {
  url: "${process.env.SUPABASE_URL || ''}",
  anonKey: "${process.env.SUPABASE_ANON_KEY || ''}"
};
`;

const outputPath = path.join(__dirname, 'config.js');
fs.writeFileSync(outputPath, config, 'utf8');
console.log('config.js created from environment variables');
