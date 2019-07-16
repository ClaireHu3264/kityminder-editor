/**
 * @fileOverview
 *
 *  与后端交互的服务
 *
 * @author: zhangbobell
 * @email : zhangbobell@163.com
 *
 * @copyright: Baidu FEX, 2015
 */
angular.module('kityminderEditor')
    .service('server', ['kmConfig', '$http', '$lcUpload', '$rootScope', function(kmConfig, $http, $lcUpload, $rootScope) {

        return {
            uploadImage: function(file, success) {
                var _team_id = $rootScope.global.me.team;
                var _files = [{
                    team_id: _team_id,
                    title: file.name,
                    identifier: 'uploadImg',
                    original: file
                }]
                  
                $lcUpload.uploadPublicFileAnonymousAttachment(_files, success);
                // var url = kmConfig.get('imageUpload');
                // var fd = new FormData();
                // fd.append('upload_file', file);

                // return $http.post(url, fd, {
                //     transformRequest: angular.identity,
                //     headers: {'Content-Type': undefined}
                // });
            }
        }
    }]);