/* Yarrow-Mullein client-side PDF layout engine. Every download is a valid, paginated PDF.
   Plain WinAnsi-compatible glyphs avoid broken font embedding on browsers and PDF readers. */
(function(global){
'use strict';
const G={forest:[0.12,0.28,0.24],gold:[0.84,0.62,0.18],pale:[1,0.975,0.925],ink:[0.13,0.19,0.17],muted:[0.43,0.48,0.44],line:[0.84,0.85,0.82]};
const W=612,H=792,LEFT=48,RIGHT=564,WIDTH=516;
function normalized(v){return String(v??'').replace(/[–—]/g,'-').replace(/[’‘]/g,"'").replace(/[“”]/g,'"').replace(/[•·]/g,'/').replace(/\s+/g,' ').normalize('NFKD').replace(/[^\x20-\x7E]/g,'').trim();}
function esc(v){return normalized(v).replace(/[\\()]/g,m=>'\\'+m);}
function col(rgb){return rgb.map(n=>Number(n.toFixed(3))).join(' ');}
function wrap(value,maxChars){const parts=normalized(value).split(' '),out=[];let line='';for(const p of parts){if(!p)continue;if(p.length>maxChars){if(line){out.push(line);line='';}for(let i=0;i<p.length;i+=maxChars)out.push(p.slice(i,i+maxChars));continue;}if((line?line.length+1:0)+p.length>maxChars){out.push(line);line=p;}else line+=(line?' ':'')+p;}if(line)out.push(line);return out.length?out:['-'];}
function docModel({title='Statement',type='CUSTOMER COPY',reference='',issued=new Date().toLocaleDateString('en-CA'),summary=[],sections=[],footer='Generated for classroom use. No actual banking activity.'}){
 let pages=[],ops=[],y=0,page=0,sectionName='';
 function put(s){ops.push(s);}
 function text(x,Y,size,s,opts={}){const font=opts.mono?'F3':opts.bold?'F2':'F1';if(opts.align==='right')x-=(opts.mono?0.60:(opts.bold?0.53:0.5))*size*normalized(s).length;const rgb=opts.color||G.ink;put(`${col(rgb)} rg BT /${font} ${size} Tf 1 0 0 1 ${x.toFixed(2)} ${Y.toFixed(2)} Tm (${esc(s)}) Tj ET`);}
 function fill(x,Y,w,h,rgb){put(`${col(rgb)} rg ${x.toFixed(2)} ${Y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re f`);}
 function line(Y){put(`${col(G.line)} RG 0.7 w ${LEFT} ${Y} m ${RIGHT} ${Y} l S`);}
 function newPage(){if(page)pages.push(ops.join('\n'));ops=[];page++;y=H-42;fill(LEFT,y-14,6,27,G.gold);text(LEFT+18,y,13,'YARROW - MULLEIN', {bold:true,color:G.forest});text(LEFT+19,y-15,8,'BANKING SERVICES',{bold:true,color:G.muted});text(RIGHT,y-4,8,type.toUpperCase(),{align:'right',bold:true,color:G.forest});line(y-28);y-=62;
   text(LEFT,y,23,title,{bold:true,color:G.ink});y-=25;text(LEFT,y,9,'DOCUMENT ID', {bold:true,color:G.muted});text(LEFT,y-14,10,reference||'-',{bold:true});text(350,y,9,'ISSUED', {bold:true,color:G.muted});text(350,y-14,10,issued);y-=37;line(y);y-=22;}
 function ensure(need){if(y-need<92){newPage();if(sectionName){text(LEFT,y,10,sectionName+' (CONTINUED)',{bold:true,color:G.forest});y-=21;}}}
 function rows(title,entries){if(!entries||!entries.length)return;ensure(44);sectionName=title.toUpperCase();fill(LEFT,y-8,WIDTH,29,G.pale);fill(LEFT,y-8,4,29,G.gold);text(LEFT+13,y+2,11,sectionName,{bold:true,color:G.forest});y-=24;
 for(let k=0;k<entries.length;k++){const r=entries[k];let left=String(r[0]??''),right=String(r[1]??'');const l=wrap(left,36),rr=wrap(right,33),num=Math.max(l.length,rr.length),rowHeight=Math.max(29,num*13+12);ensure(rowHeight+2);if(k%2===0)fill(LEFT,y-rowHeight+4,WIDTH,rowHeight,G.pale);for(let j=0;j<num;j++){text(LEFT+12,y-12-j*13,9.4,l[j]||'',{color:G.ink});text(LEFT+265,y-12-j*13,9.3,rr[j]||'',{mono:true,color:G.ink});}y-=rowHeight;put(`${col(G.line)} RG 0.5 w ${LEFT} ${y+3} m ${RIGHT} ${y+3} l S`);}
 y-=17;sectionName='';}
 newPage();rows('ACCOUNT OVERVIEW',summary);for(const s of sections)rows(s.title,s.rows||[]);
 let foot=wrap(footer,102).slice(0,2);line(93);let fy=82;for(const t of foot){text(LEFT,fy,8,t,{color:G.muted});fy-=12;}pages.push(ops.join('\n'));
 // Footer on each page. Use simple, byte-exact objects and xref offsets.
 const contents=pages.map((str,i)=>str+`\n${col(G.muted)} rg BT /F1 8 Tf 1 0 0 1 ${LEFT} 52 Tm (SAMPLE DOCUMENT - NOT A BANK RECORD) Tj ET\n`+`${col(G.muted)} rg BT /F1 8 Tf 1 0 0 1 516 52 Tm (${i+1} / ${pages.length}) Tj ET`);
 const objs=[null];let add=s=>(objs.push(s),objs.length-1);const catalog=add(''),pagesObj=add(''),regular=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'),bold=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>'),mono=add('<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>'),pageIds=[];
 contents.forEach(data=>{const pid=add(''),cid=add(`<< /Length ${data.length} >>\nstream\n${data}\nendstream`);pageIds.push(pid);objs[pid]=`<< /Type /Page /Parent ${pagesObj} 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 ${regular} 0 R /F2 ${bold} 0 R /F3 ${mono} 0 R >> >> /Contents ${cid} 0 R >>`;});objs[pagesObj]=`<< /Type /Pages /Kids [${pageIds.map(i=>`${i} 0 R`).join(' ')}] /Count ${pageIds.length} >>`;objs[catalog]=`<< /Type /Catalog /Pages ${pagesObj} 0 R >>`;
 let out='%PDF-1.4\n%\xE2\xE3\xCF\xD3\n',offsets=[0];for(let i=1;i<objs.length;i++){offsets[i]=out.length;out+=`${i} 0 obj\n${objs[i]}\nendobj\n`;}const start=out.length;out+=`xref\n0 ${objs.length}\n0000000000 65535 f \n`;for(let i=1;i<objs.length;i++)out+=`${String(offsets[i]).padStart(10,'0')} 00000 n \n`;out+=`trailer\n<< /Size ${objs.length} /Root ${catalog} 0 R >>\nstartxref\n${start}\n%%EOF`;
 return Uint8Array.from(out,c=>c.charCodeAt(0));
}
function download(name,model){const data=docModel(model);const blob=new Blob([data],{type:'application/pdf'});const a=document.createElement('a');const url=URL.createObjectURL(blob);a.href=url;a.download=name.toLowerCase().endsWith('.pdf')?name:name+'.pdf';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2500);return blob;}
global.YMPDF={create:docModel,download};
})(typeof window!=='undefined'?window:globalThis);
