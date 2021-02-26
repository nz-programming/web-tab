const showTab = (selector) => {
    //activeクラスの削除
    $('.tabs-menu > div').removeClass('active');
    
    //コンテンツの非表示
    $('.tabs-content > div').hide();
    console.log(selector);
    
    //activeクラスの付与
    $(`.tabs-menu div#${selector}`)
    .addClass('active');
    console.log(`.tabs-menu div#${selector}`);
    
    //activeクラスに紐づくコンテンツの表示
    const endfigure = selector.slice(-1);
    console.log(selector.slice(-1));
    $(`div #tabs-${endfigure}`).show();
};

$('.tabs-menu div').on('click', (e) => {
    const selector = $(e.target).attr('id');
    console.log(e);
    console.log(selector);
    showTab(selector);
});


showTab('tab-menu-a');