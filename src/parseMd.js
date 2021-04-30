"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const child_process_1 = require("child_process");
const chalk_1 = require("chalk");
const showdown_1 = __importDefault(require("showdown"));
const showdown = new showdown_1.default.Converter();
showdown.setFlavor('github');
const sidenav = fs_1.readFileSync(path_1.join(__dirname, 'global', 'sidenav.html'), 'utf-8');
const head = fs_1.readFileSync(path_1.join(__dirname, 'global', 'head.html'), 'utf-8');
const breef = 'Malil general-purpose bot with Slash-Commands';
const compiler = new (class Compiler {
    constructor({ scss, md, css, html, }) {
        this.scssdir = scss;
        this.mddir = md;
        this.cssdir = css;
        this.htmldir = html;
    }
    async compileScss() {
        for (const file of fs_1.readdirSync(this.scssdir).filter((file) => file.endsWith('.scss'))) {
            console.time(chalk_1.cyan(file));
            const scss = path_1.join(this.scssdir, file);
            const css = path_1.join(this.cssdir, file.replace('.scss', '.css'));
            child_process_1.exec(`yarn sass ${scss} ${css} --style compressed  --no-source-map `, (e, a, c) => console.log(e, a, c));
            console.timeEnd(chalk_1.cyan(file));
        }
    }
    async compileTf() {
        for (const file of fs_1.readdirSync(path_1.join(this.mddir)).filter((file) => file.endsWith('md'))) {
            console.time(chalk_1.blue(file));
            const html = fs_1.readFileSync(path_1.join(this.mddir, file), 'utf-8').split('{!')[0];
            const md = fs_1.readFileSync(path_1.join(this.mddir, file), 'utf-8').split('{!')[1];
            const converted = showdown.makeHtml(md);
            const dir = path_1.join(this.htmldir, file.replace('.md', '.html'));
            const out = html
                .replace('{{input}}', converted)
                .replace('{{sidenav}}', sidenav)
                .replace('{{head}}', head)
                .replace('{{breef}}', breef)
                .replace('{{title}}', file.replace('.md', ''));
            fs_1.writeFileSync(dir, out);
            console.timeEnd(chalk_1.blue(file));
        }
    }
    async compile() {
        this.compileScss();
        this.compileTf();
        //console.time(green("Formatted"));
        //exec("npx prettier-eslint --write ./public/**/**", () => console.timeEnd(green("Formatted")));
    }
})({
    scss: path_1.join(__dirname, 'scss'),
    md: path_1.join(__dirname, 'md'),
    css: path_1.join(__dirname, '..', 'public', 'css'),
    html: path_1.join(__dirname, '..'),
});
compiler.compile();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VNZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcnNlTWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBOEQ7QUFDOUQsK0JBQTRCO0FBQzVCLGlEQUFxQztBQUNyQyxpQ0FBMEM7QUFDMUMsd0RBQWdDO0FBQ2hDLE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUMxQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sT0FBTyxHQUFHLGlCQUFZLENBQzNCLFdBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxFQUN6QyxPQUFPLENBQ1AsQ0FBQztBQUNGLE1BQU0sSUFBSSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0UsTUFBTSxLQUFLLEdBQUcsK0NBQStDLENBQUM7QUFFOUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sUUFBUTtJQUtuQyxZQUFZLEVBQ1gsSUFBSSxFQUNKLEVBQUUsRUFDRixHQUFHLEVBQ0gsSUFBSSxHQU1KO1FBQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELEtBQUssQ0FBQyxXQUFXO1FBQ2hCLEtBQUssTUFBTSxJQUFJLElBQUksZ0JBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FDdEIsRUFBRTtZQUNGLE9BQU8sQ0FB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O0FBQ0gsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jLCByZWFkZGlyU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7IGdyZWVuLCBibHVlLCBjeWFuIH0gZnJvbSAnY2hhbGsnO1xuaW1wb3J0IFNob3dkb3duIGZyb20gJ3Nob3dkb3duJztcbmNvbnN0IHNob3dkb3duID0gbmV3IFNob3dkb3duLkNvbnZlcnRlcigpO1xuc2hvd2Rvd24uc2V0Rmxhdm9yKCdnaXRodWInKTtcbmNvbnN0IHNpZGVuYXYgPSByZWFkRmlsZVN5bmMoXG5cdGpvaW4oX19kaXJuYW1lLCAnZ2xvYmFsJywgJ3NpZGVuYXYuaHRtbCcpLFxuXHQndXRmLTgnXG4pO1xuY29uc3QgaGVhZCA9IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJ2dsb2JhbCcsICdoZWFkLmh0bWwnKSwgJ3V0Zi04Jyk7XG5jb25zdCBicmVlZiA9ICdNYWxpbCBnZW5lcmFsLXB1cnBvc2UgYm90IHdpdGggU2xhc2gtQ29tbWFuZHMnO1xuXG5jb25zdCBjb21waWxlciA9IG5ldyAoY2xhc3MgQ29tcGlsZXIge1xuXHRzY3NzZGlyOiBzdHJpbmc7XG5cdG1kZGlyOiBzdHJpbmc7XG5cdGNzc2Rpcjogc3RyaW5nO1xuXHRodG1sZGlyOiBzdHJpbmc7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRzY3NzLFxuXHRcdG1kLFxuXHRcdGNzcyxcblx0XHRodG1sLFxuXHR9OiB7XG5cdFx0c2Nzczogc3RyaW5nO1xuXHRcdG1kOiBzdHJpbmc7XG5cdFx0Y3NzOiBzdHJpbmc7XG5cdFx0aHRtbDogc3RyaW5nO1xuXHR9KSB7XG5cdFx0dGhpcy5zY3NzZGlyID0gc2Nzcztcblx0XHR0aGlzLm1kZGlyID0gbWQ7XG5cdFx0dGhpcy5jc3NkaXIgPSBjc3M7XG5cdFx0dGhpcy5odG1sZGlyID0gaHRtbDtcblx0fVxuXHRhc3luYyBjb21waWxlU2NzcygpIHtcblx0XHRmb3IgKGNvbnN0IGZpbGUgb2YgcmVhZGRpclN5bmModGhpcy5zY3NzZGlyKS5maWx0ZXIoKGZpbGUpID0+XG5cdFx0XHRmaWxlLmVuZHNXaXRoKCcuc2NzcycpXG5cdFx0KSkge1xuXHRcdFx0Y29uc29sZS50aW1lKGN5YW4oZmlsZSkpO1xuXHRcdFx0Y29uc3Qgc2NzcyA9IGpvaW4odGhpcy5zY3NzZGlyLCBmaWxlKTtcblx0XHRcdGNvbnN0IGNzcyA9IGpvaW4odGhpcy5jc3NkaXIsIGZpbGUucmVwbGFjZSgnLnNjc3MnLCAnLmNzcycpKTtcblx0XHRcdGV4ZWMoXG5cdFx0XHRcdGB5YXJuIHNhc3MgJHtzY3NzfSAke2Nzc30gLS1zdHlsZSBjb21wcmVzc2VkICAtLW5vLXNvdXJjZS1tYXAgYCxcblx0XHRcdFx0KGUsIGEsIGMpID0+IGNvbnNvbGUubG9nKGUsIGEsIGMpXG5cdFx0XHQpO1xuXHRcdFx0Y29uc29sZS50aW1lRW5kKGN5YW4oZmlsZSkpO1xuXHRcdH1cblx0fVxuXHRhc3luYyBjb21waWxlVGYoKSB7XG5cdFx0Zm9yIChjb25zdCBmaWxlIG9mIHJlYWRkaXJTeW5jKGpvaW4odGhpcy5tZGRpcikpLmZpbHRlcigoZmlsZSkgPT5cblx0XHRcdGZpbGUuZW5kc1dpdGgoJ21kJylcblx0XHQpKSB7XG5cdFx0XHRjb25zb2xlLnRpbWUoYmx1ZShmaWxlKSk7XG5cdFx0XHRjb25zdCBodG1sID0gcmVhZEZpbGVTeW5jKGpvaW4odGhpcy5tZGRpciwgZmlsZSksICd1dGYtOCcpLnNwbGl0KCd7IScpWzBdO1xuXHRcdFx0Y29uc3QgbWQgPSByZWFkRmlsZVN5bmMoam9pbih0aGlzLm1kZGlyLCBmaWxlKSwgJ3V0Zi04Jykuc3BsaXQoJ3shJylbMV07XG5cdFx0XHRjb25zdCBjb252ZXJ0ZWQgPSBzaG93ZG93bi5tYWtlSHRtbChtZCk7XG5cdFx0XHRjb25zdCBkaXIgPSBqb2luKHRoaXMuaHRtbGRpciwgZmlsZS5yZXBsYWNlKCcubWQnLCAnLmh0bWwnKSk7XG5cblx0XHRcdGNvbnN0IG91dCA9IGh0bWxcblx0XHRcdFx0LnJlcGxhY2UoJ3t7aW5wdXR9fScsIGNvbnZlcnRlZClcblxuXHRcdFx0XHQucmVwbGFjZSgne3tzaWRlbmF2fX0nLCBzaWRlbmF2KVxuXG5cdFx0XHRcdC5yZXBsYWNlKCd7e2hlYWR9fScsIGhlYWQpXG5cblx0XHRcdFx0LnJlcGxhY2UoJ3t7YnJlZWZ9fScsIGJyZWVmKVxuXG5cdFx0XHRcdC5yZXBsYWNlKCd7e3RpdGxlfX0nLCBmaWxlLnJlcGxhY2UoJy5tZCcsICcnKSk7XG5cblx0XHRcdHdyaXRlRmlsZVN5bmMoZGlyLCBvdXQpO1xuXHRcdFx0Y29uc29sZS50aW1lRW5kKGJsdWUoZmlsZSkpO1xuXHRcdH1cblx0fVxuXHRhc3luYyBjb21waWxlKCkge1xuXHRcdHRoaXMuY29tcGlsZVNjc3MoKTtcblx0XHR0aGlzLmNvbXBpbGVUZigpO1xuXHRcdC8vY29uc29sZS50aW1lKGdyZWVuKFwiRm9ybWF0dGVkXCIpKTtcblx0XHQvL2V4ZWMoXCJucHggcHJldHRpZXItZXNsaW50IC0td3JpdGUgLi9wdWJsaWMvKiovKipcIiwgKCkgPT4gY29uc29sZS50aW1lRW5kKGdyZWVuKFwiRm9ybWF0dGVkXCIpKSk7XG5cdH1cbn0pKHtcblx0c2Nzczogam9pbihfX2Rpcm5hbWUsICdzY3NzJyksXG5cdG1kOiBqb2luKF9fZGlybmFtZSwgJ21kJyksXG5cdGNzczogam9pbihfX2Rpcm5hbWUsICcuLicsICdwdWJsaWMnLCAnY3NzJyksXG5cdGh0bWw6IGpvaW4oX19kaXJuYW1lLCAnLi4nKSxcbn0pO1xuY29tcGlsZXIuY29tcGlsZSgpO1xuIl19