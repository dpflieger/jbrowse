define( [
            'dojo/_base/declare',
            'JBrowse/View/InfoDialog'
        ],
        function(
            declare,
            InfoDialog
        ) {
return declare( InfoDialog, {

    title: "JBrowse Help",

    constructor: function(args) {
        this.browser = args.browser;
        this.defaultContent = this._makeDefaultContent();

        if( ! args.content && ! args.href ) {
            // make a div containing our help text
            this.content = this.defaultContent;
        }
    },

    _makeDefaultContent: function() {
        return    ''
                + '<div class="help_dialog">'
                + '<div class="main" style="float: left; width: 79%;">'

                + '<dl>'
                + '<dt>Introduction</dt>'
                + '<dd><ul>'
	        + '    <li>JBrowse has a double pane interface, with the track list on the left side and the track display on the right. The navigation and search features are all located at the top right below the menu bar.</li>'
                + '</ul></dd>'
	        + '<img src="img/jbrowse_intro.png" height="420px">'
                + '<dt>Moving</dt>'
                + '<dd><ul>'
                + '    <li>Move the view by clicking and dragging in the track area, or by clicking <img class="icon nav" id="moveLeftSmall" src="'+this.browser.resolveUrl('img/Empty.png')+'">  or <img class="icon nav" id="moveRightSmall" src="'+this.browser.resolveUrl('img/Empty.png')+'"> in the navigation bar, or by pressing the left and right arrow keys.</li>'
                + '    <li>Center the view at a point by clicking on either the track scale bar or overview bar, or by shift-clicking in the track area.</li>'
                + '</ul></dd>'
                + '<dt>Zooming</dt>'
                + '<dd><ul>'
                + '    <li>Zoom in and out by clicking <img class="icon nav" id="zoomInSmall" src="'+this.browser.resolveUrl('img/Empty.png')+'"> or <img class="icon nav" id="zoomOutSmall" src="'+this.browser.resolveUrl('img/Empty.png')+'"> in the navigation bar, or by pressing the up and down arrow keys while holding down "shift".</li>'
                + '    <li>Select a region and zoom to it ("rubber-band" zoom) by clicking and dragging in the overview or track scale bar, or shift-clicking and dragging in the track area.</li>'
                + '    </ul>'
	        + '<img src="img/rubberband_zoom.png" height="100px">'
                + '</dd>'
                + '<dt>Showing Tracks</dt>'
                + '<dd><ul><li>Turn a track on by checking its box.</li>'
                + '        <li>Turn a track off by selecting the "X" button on the track header.</li>'
                + '    </ul>'
	        + '<img src="img/displaying_track.png" height="250px">'
                + '</dd>'
                + '<dt>Track Lists</dt>'
                + '<dd><ul><li>The hierarchical track list displays tracks arranged into various categories and sub-categories. </li>'
              + '    </ul>'
	        + '<img src="img/track_types.png" height="300px">'
                + '</dd>'
                + '<dt>Faceted Track Displayer</dt>'
                + '<dd><ul><li>In addition to the tracks available within the hierarchical menu, additional tracks are available through the faceted track displayer. </li>'
	        + '    <li>The comprehensive list of metadata are available on the left hand side and is searchable. The data displayed within the columns are only a subset.</li>'
                + '    </ul>'
	        + '<img src="img/jbrowse_faceted_help.jpg">'
                + '</dd>'	


                + '</dl>'



                + '<dl>'
                + '<dt>Searching</dt>'
                + '<dd><ul>'
                + '    <li>Jump to a feature or reference sequence by typing its name in the location box and pressing Enter.</li>'
                + '    <li>Jump to a specific region by typing the region into the location box as: <span class="example">ref:start..end</span>.</li>'
	        + '<img src="img/search_by_position.png" height="150px">'
	        + '   <li>You can also search by locus id and annotation features such as gene symbol and protein name.</li>'
	        + '<img src="img/search_by_other.png" height="300px">'
                + '    </ul>'
                + '</dd>'
                + '<dt>Example Searches</dt>'
                + '<dd>'
                + '    <dl class="searchexample">'
                + '        <dt>uc0031k.2</dt><dd>searches for the feature named <span class="example">uc0031k.2</span>.</dd>'
                + '        <dt>chr4</dt><dd>jumps to chromosome 4</dd>'
                + '        <dt>chr4:79,500,000..80,000,000</dt><dd>jumps the region on chromosome 4 between 79.5Mb and 80Mb.</dd>'
                + '        <dt>5678</dt><dd>centers the display at base 5,678 on the current sequence</dd>'
                + '    </dl>'
                + '</dd>'
                + '<dt>JBrowse Documentation</dt>'
                + '<dd><ul><li><a target="_blank" href="docs/tutorial/">Quick-start tutorial</a></li>'
                + '        <li><a target="_blank" href="http://gmod.org/wiki/JBrowse">JBrowse Configuration Guide</a></li>'
                + '        <li><a target="_blank" href="docs/config.html"><tt>biodb-to-json.pl</tt> reference</a></li>'
                + '        <li><a target="_blank" href="docs/featureglyphs.html">HTMLFeatures class reference</a></li>'
                + '    </ul>'
                + '</dd>'
                + '</dl>'
                + '</div>'

            ;
    }
});
});
