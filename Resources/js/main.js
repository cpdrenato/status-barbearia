
            $(document).ready(function () {
               // $(".projCont").scrollLeft(600);



                var methods = {
                    init: function (options) {

                        var childs = this.children('div');     // pega todos elementos filhos
                        var left = this.children('a.left');  // pega seta esquerda
                        var right = this.children('a.right'); // pega seta direita
                        var size = getSize();                // pegar quantidade de itens de acordo com a resoluÃ§Ã£o
                        var page = 0;                        // pagina padrÃ£o

                        show(childs, size, left, right, page); // exibe quantidade calculada anteriormente

                        // detecta redimencionamento e exibe quantidade de acordo com nova resoluÃ§Ã£o
                        $(window).bind("resize", function (event) {

                            size = getSize(); // pega quantidade
                            show(childs, size, left, right, page); // exibe
                        });

                        // ao clicar no link direcional
                        $(left).on('click', function (e) {

                            e.preventDefault();
                            page = page - 1;

                            if (page < 0) {

                                // pega quantidade de paginas
                                p = childs.length / size;
                                n = parseInt(p);

                                if ((childs.length % size) != 0) {
                                    n = n + 1;
                                }
                                page = n - 1;
                            }

                            show(childs, size, left, right, page); // exibe
                        });

                        // ao clicar no link direcional
                        $(right).on('click', function (e) {

                            e.preventDefault();
                            page = page + 1;

                            // pega quantidade de paginas
                            p = childs.length / size;
                            n = parseInt(p);

                            if ((childs.length % size) != 0) {
                                n = n + 1;
                            }
                            p2 = n - 1;

                            // se nova pagina maior que quantidade de paginas manda para primeira pagina
                            if (page > p2) {
                                page = 0;
                            }

                            show(childs, size, left, right, page); // exibe

                        }); // $( right ).on('click', function(e){

                    }, // init : function( options ) {

                }; // var methods = {



                $.fn.list = function (method) {

                    if (methods[method]) {

                        return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
                    }
                    else if (typeof method === 'object' || !method) {

                        return methods.init.apply(this, arguments);
                    }
                    else {

                        $.error('Method ' + method + ' does not exist');
                    }
                };



                function show(childs, showNum, left, right, page) {

                    // hide todos itens
                    childs.each(function (c) {

                        $(this).css('display', 'none');
                    });

                    // exibe todos
                    if (showNum == 'all') {

                        childs.each(function (c) {

                            $(this).css('display', 'block');
                        });

                        // exibe setas
                        left.css('display', 'none');
                        right.css('display', 'none');
                    }
                    else { // if(showNum=='all'){

                        // exibe setas
                        left.css('display', 'block');
                        right.css('display', 'block');

                        // pagina 0
                        if (page == 0) {

                            var i = 0;
                        }
                        else {

                            // pega valor da pagina
                            var i = showNum * page;
                        }

                        // exibe de acordo com as paginas
                        for (e = i; e < (showNum + i); e++) {

                            if (typeof childs[e] != "undefined") {
                                $(childs[e]).css('display', 'block');
                            }
                        }

                    } // else - if(showNum=='all'){

                } // show = function( childs, showNum ) {



                function getSize() {

                    var w = $(window).width();

                    if (w <= '767') {

                        return 1; //'all';
                    }
                    else if ((w > '767') && (w <= '991')) {

                        return 2;
                    }
                    else if (w > '991') {

                        return 3;
                    }
                }


                $('.projCont').list();
            });