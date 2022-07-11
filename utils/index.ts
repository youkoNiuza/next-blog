import crypto from 'crypto';
const salt = 'youkoblog';

const _md5 = function(pwd:string):string {
    const md5 = crypto.createHash('md5');
    const hash = md5.update(pwd).digest('hex');
    return hash;
}

export const generatePwd = function (pwd:string):string {
    pwd += salt;
    const hash = _md5(pwd);
    return hash;
}
