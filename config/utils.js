/*
 * @Descripttion: 
 * @Author: chenxch
 * @Date: 2020-08-07 11:40:40
 */
const companyName = 'xc';
module.exports = {
  getFilePath(path, keyWord) {
    const pot = path.indexOf(keyWord);
    if (pot >= 0) {
      return path.substring(pot + keyWord.length + 1, path.length - 5);
    }
    return null;
  },
  cameLize(str) {
    return str.toLowerCase().replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
  },
  getSystemName(sysName) {
    const sys = sysName.indexOf(companyName) !== -1 ? sysName.substring(sysName.indexOf(companyName) + companyName.length, sysName.length) : sysName;
    return this.cameLize(sys);
  }
};
