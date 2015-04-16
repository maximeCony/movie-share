window.LOAD_DUST_TEMPATES = function () {(function(dust){dust.register("index",body_0);function body_0(chk,ctx){return chk.w("<!doctype html><html><head><title>Movie Mime</title><link rel=\"stylesheet\" href=\"/public/assets/css/bootstrap/bootstrap.css\"><link rel=\"stylesheet\" href=\"/public/assets/css/main.css\"></head><body><div class=\"container\"><h1>M<span class=\"heart grow\">❤</span>vie <span class=\"striped-mime\">Mime</span></h1><p>A simple website design that facilitates the movie watching experience with friends and family afar. <br>The app syncs the movie progression of both participants, allowing for real-time pausing, rewinding, and fast-forwarding to mirror the other’s.</p><a href=\"/rooms\" class=\"btn btn-primary btn-lgl\">Start</a></div></body></html>");}body_0.__dustBody=!0;return body_0;})(dust);
(function(dust){dust.register("layout",body_0);function body_0(chk,ctx){return chk.w("<!doctype html><html><head><title>").s(ctx.get(["title"], false),ctx,{"else":body_1,"block":body_2},{}).w("</title><link rel=\"stylesheet\" href=\"/public/assets/css/bootstrap/bootstrap.css\"><link rel=\"stylesheet\" href=\"/public/assets/css/main.css\">").block(ctx.getBlock("styles"),ctx,{},{}).w("</head><body><div class=\"container\"><div class=\"header\"><input id=\"usernameInput\" class=\"is-hidden\" type=\"text\" placeholder=\"What's your name?\"><h1 class=\"text-muted\"><a href=\"/\" class=\"hidden-link\">M<span class=\"heart grow\">❤</span>vie <span class=\"striped-mime\">Mime</span></a></h1><hr><div id=\"js-alerts\"></div></div>").block(ctx.getBlock("content"),ctx,{},{}).w("</div></body>").block(ctx.getBlock("scripts"),ctx,{},{}).w("</html>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("Movie Mime");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.f(ctx.get(["title"], false),ctx,"h");}body_2.__dustBody=!0;return body_0;})(dust);
(function(dust){dust.register("room-row",body_0);function body_0(chk,ctx){return chk.s(ctx.get(["room"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<h3>").f(ctx.get(["name"], false),ctx,"h").w("</h3><hr>");}body_1.__dustBody=!0;return body_0;})(dust);
(function(dust){dust.register("room",body_0);function body_0(chk,ctx){return chk.w("<div id=\"js-dragDropFileHandler\" class=\"fileHandler\"><h3>Drag and drop a movie here</h3></div><video id=\"js-video\" class=\"is-hidden\" controls>Your browser does not support HTML5 video.</video><h5 id=\"js-fileName\" class=\"text-muted\"></h5>");}body_0.__dustBody=!0;return body_0;})(dust);
(function(dust){dust.register("rooms",body_0);var blocks={"scripts":body_1,"content":body_2};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layout",ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<script src=\"/public/scripts/dist/templates/templates.js\"></script><script src=\"/public/scripts/dist/apps/rooms-app.js\"></script>");}body_1.__dustBody=!0;function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<button type=\"button\" class=\"btn btn-primary btn-lg pull-right js-createRoomModal\">Create Room</button><br><div class=\"js-rooms\"></div><div id=\"js-createRoomModal\" class=\"modal fade\"><div class=\"modal-dialog\"><form class=\"js-createRoomForm\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\">Create modal</h4></div><div class=\"modal-body\"><div class=\"form-group\"><label>Room name</label><input type=\"text\" class=\"form-control\" placeholder=\"Room Name\" name=\"name\"></div><div class=\"form-group\"><label>Password</label><input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\"></div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button><button type=\"submit\" class=\"btn btn-primary\">Create</button></div></div></form></div></div>");}body_2.__dustBody=!0;return body_0;})(dust);};