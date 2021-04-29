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
            child_process_1.exec(`yarn sass ${scss} ${css} --style compressed --sourcemap=none`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VNZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcnNlTWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBOEQ7QUFDOUQsK0JBQTRCO0FBQzVCLGlEQUFxQztBQUNyQyxpQ0FBMEM7QUFDMUMsd0RBQWdDO0FBQ2hDLE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUMxQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sT0FBTyxHQUFHLGlCQUFZLENBQzNCLFdBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxFQUN6QyxPQUFPLENBQ1AsQ0FBQztBQUNGLE1BQU0sSUFBSSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0UsTUFBTSxLQUFLLEdBQUcsK0NBQStDLENBQUM7QUFFOUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sUUFBUTtJQUtuQyxZQUFZLEVBQ1gsSUFBSSxFQUNKLEVBQUUsRUFDRixHQUFHLEVBQ0gsSUFBSSxHQU1KO1FBQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELEtBQUssQ0FBQyxXQUFXO1FBQ2hCLEtBQUssTUFBTSxJQUFJLElBQUksZ0JBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FDdEIsRUFBRTtZQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxJQUFJLEdBQUcsV0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEMsTUFBTSxHQUFHLEdBQUcsV0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3RCxvQkFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEdBQUcsc0NBQXNDLENBQUMsQ0FBQztZQUNyRSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzVCO0lBQ0YsQ0FBQztJQUNELEtBQUssQ0FBQyxTQUFTO1FBQ2QsS0FBSyxNQUFNLElBQUksSUFBSSxnQkFBVyxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUNuQixFQUFFO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLElBQUksR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxNQUFNLEVBQUUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sR0FBRyxHQUFHLFdBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFN0QsTUFBTSxHQUFHLEdBQUcsSUFBSTtpQkFDZCxPQUFPLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztpQkFFL0IsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7aUJBRS9CLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO2lCQUV6QixPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQztpQkFFM0IsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWhELGtCQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDNUI7SUFDRixDQUFDO0lBQ0QsS0FBSyxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLG1DQUFtQztRQUNuQyxnR0FBZ0c7SUFDakcsQ0FBQztDQUNELENBQUMsQ0FBQztJQUNGLElBQUksRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztJQUM3QixFQUFFLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7SUFDekIsR0FBRyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7SUFDM0MsSUFBSSxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO0NBQzNCLENBQUMsQ0FBQztBQUNILFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYywgcmVhZGRpclN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBncmVlbiwgYmx1ZSwgY3lhbiB9IGZyb20gJ2NoYWxrJztcbmltcG9ydCBTaG93ZG93biBmcm9tICdzaG93ZG93bic7XG5jb25zdCBzaG93ZG93biA9IG5ldyBTaG93ZG93bi5Db252ZXJ0ZXIoKTtcbnNob3dkb3duLnNldEZsYXZvcignZ2l0aHViJyk7XG5jb25zdCBzaWRlbmF2ID0gcmVhZEZpbGVTeW5jKFxuXHRqb2luKF9fZGlybmFtZSwgJ2dsb2JhbCcsICdzaWRlbmF2Lmh0bWwnKSxcblx0J3V0Zi04J1xuKTtcbmNvbnN0IGhlYWQgPSByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICdnbG9iYWwnLCAnaGVhZC5odG1sJyksICd1dGYtOCcpO1xuY29uc3QgYnJlZWYgPSAnTWFsaWwgZ2VuZXJhbC1wdXJwb3NlIGJvdCB3aXRoIFNsYXNoLUNvbW1hbmRzJztcblxuY29uc3QgY29tcGlsZXIgPSBuZXcgKGNsYXNzIENvbXBpbGVyIHtcblx0c2Nzc2Rpcjogc3RyaW5nO1xuXHRtZGRpcjogc3RyaW5nO1xuXHRjc3NkaXI6IHN0cmluZztcblx0aHRtbGRpcjogc3RyaW5nO1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0c2Nzcyxcblx0XHRtZCxcblx0XHRjc3MsXG5cdFx0aHRtbCxcblx0fToge1xuXHRcdHNjc3M6IHN0cmluZztcblx0XHRtZDogc3RyaW5nO1xuXHRcdGNzczogc3RyaW5nO1xuXHRcdGh0bWw6IHN0cmluZztcblx0fSkge1xuXHRcdHRoaXMuc2Nzc2RpciA9IHNjc3M7XG5cdFx0dGhpcy5tZGRpciA9IG1kO1xuXHRcdHRoaXMuY3NzZGlyID0gY3NzO1xuXHRcdHRoaXMuaHRtbGRpciA9IGh0bWw7XG5cdH1cblx0YXN5bmMgY29tcGlsZVNjc3MoKSB7XG5cdFx0Zm9yIChjb25zdCBmaWxlIG9mIHJlYWRkaXJTeW5jKHRoaXMuc2Nzc2RpcikuZmlsdGVyKChmaWxlKSA9PlxuXHRcdFx0ZmlsZS5lbmRzV2l0aCgnLnNjc3MnKVxuXHRcdCkpIHtcblx0XHRcdGNvbnNvbGUudGltZShjeWFuKGZpbGUpKTtcblx0XHRcdGNvbnN0IHNjc3MgPSBqb2luKHRoaXMuc2Nzc2RpciwgZmlsZSk7XG5cdFx0XHRjb25zdCBjc3MgPSBqb2luKHRoaXMuY3NzZGlyLCBmaWxlLnJlcGxhY2UoJy5zY3NzJywgJy5jc3MnKSk7XG5cdFx0XHRleGVjKGB5YXJuIHNhc3MgJHtzY3NzfSAke2Nzc30gLS1zdHlsZSBjb21wcmVzc2VkIC0tc291cmNlbWFwPW5vbmVgKTtcblx0XHRcdGNvbnNvbGUudGltZUVuZChjeWFuKGZpbGUpKTtcblx0XHR9XG5cdH1cblx0YXN5bmMgY29tcGlsZVRmKCkge1xuXHRcdGZvciAoY29uc3QgZmlsZSBvZiByZWFkZGlyU3luYyhqb2luKHRoaXMubWRkaXIpKS5maWx0ZXIoKGZpbGUpID0+XG5cdFx0XHRmaWxlLmVuZHNXaXRoKCdtZCcpXG5cdFx0KSkge1xuXHRcdFx0Y29uc29sZS50aW1lKGJsdWUoZmlsZSkpO1xuXHRcdFx0Y29uc3QgaHRtbCA9IHJlYWRGaWxlU3luYyhqb2luKHRoaXMubWRkaXIsIGZpbGUpLCAndXRmLTgnKS5zcGxpdCgneyEnKVswXTtcblx0XHRcdGNvbnN0IG1kID0gcmVhZEZpbGVTeW5jKGpvaW4odGhpcy5tZGRpciwgZmlsZSksICd1dGYtOCcpLnNwbGl0KCd7IScpWzFdO1xuXHRcdFx0Y29uc3QgY29udmVydGVkID0gc2hvd2Rvd24ubWFrZUh0bWwobWQpO1xuXHRcdFx0Y29uc3QgZGlyID0gam9pbih0aGlzLmh0bWxkaXIsIGZpbGUucmVwbGFjZSgnLm1kJywgJy5odG1sJykpO1xuXG5cdFx0XHRjb25zdCBvdXQgPSBodG1sXG5cdFx0XHRcdC5yZXBsYWNlKCd7e2lucHV0fX0nLCBjb252ZXJ0ZWQpXG5cblx0XHRcdFx0LnJlcGxhY2UoJ3t7c2lkZW5hdn19Jywgc2lkZW5hdilcblxuXHRcdFx0XHQucmVwbGFjZSgne3toZWFkfX0nLCBoZWFkKVxuXG5cdFx0XHRcdC5yZXBsYWNlKCd7e2JyZWVmfX0nLCBicmVlZilcblxuXHRcdFx0XHQucmVwbGFjZSgne3t0aXRsZX19JywgZmlsZS5yZXBsYWNlKCcubWQnLCAnJykpO1xuXG5cdFx0XHR3cml0ZUZpbGVTeW5jKGRpciwgb3V0KTtcblx0XHRcdGNvbnNvbGUudGltZUVuZChibHVlKGZpbGUpKTtcblx0XHR9XG5cdH1cblx0YXN5bmMgY29tcGlsZSgpIHtcblx0XHR0aGlzLmNvbXBpbGVTY3NzKCk7XG5cdFx0dGhpcy5jb21waWxlVGYoKTtcblx0XHQvL2NvbnNvbGUudGltZShncmVlbihcIkZvcm1hdHRlZFwiKSk7XG5cdFx0Ly9leGVjKFwibnB4IHByZXR0aWVyLWVzbGludCAtLXdyaXRlIC4vcHVibGljLyoqLyoqXCIsICgpID0+IGNvbnNvbGUudGltZUVuZChncmVlbihcIkZvcm1hdHRlZFwiKSkpO1xuXHR9XG59KSh7XG5cdHNjc3M6IGpvaW4oX19kaXJuYW1lLCAnc2NzcycpLFxuXHRtZDogam9pbihfX2Rpcm5hbWUsICdtZCcpLFxuXHRjc3M6IGpvaW4oX19kaXJuYW1lLCAnLi4nLCAncHVibGljJywgJ2NzcycpLFxuXHRodG1sOiBqb2luKF9fZGlybmFtZSwgJy4uJyksXG59KTtcbmNvbXBpbGVyLmNvbXBpbGUoKTtcbiJdfQ==