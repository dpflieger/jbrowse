define([
           'dojo/_base/declare',
           'JBrowse/View/FeatureGlyph/Box'
       ],
       function(
           declare,
           BoxGlyph
       ) {

return declare( BoxGlyph, {

_defaultConfig: function() {
    return this._mergeConfigs(
        this.inherited(arguments),
        {
            style: {
                connector_color: '#333',
                border_color: 'rgba( 0, 0, 0, 0.3 )'
            }
        });
},

renderFeature: function( context, fRect ) {
    if( this.track.displayMode != 'collapsed' )
        context.clearRect( Math.floor(fRect.l), fRect.t, Math.ceil(fRect.w), fRect.h );

    this.renderConnector( context,  fRect );
    this.renderSegments( context, fRect );
    this.renderLabel( context, fRect );
    this.renderDescription( context, fRect );
    this.renderArrowhead( context, fRect );
},

renderConnector: function( context, fRect ) {
    // connector
    var connectorColor = this.getStyle( fRect.f, 'connector_color' );
    if( connectorColor ) {
        context.fillStyle = connectorColor;
        context.fillRect(
            fRect.rect.l, // left
            fRect.t+Math.round(fRect.rect.h/2)-1, // top
            fRect.rect.w, // width
            fRect.viewInfo.displayMode == 'normal' ? 2 : 1 // height
        );
    }
},

renderSegments: function( context, fRect ) {
    var subfeatures = fRect.f.children();
    if( subfeatures ) {

        var thisB = this;
        var parentFeature = fRect.f;

        function style( feature, stylename ) {
            if( stylename == 'height' )
                return thisB._getFeatureHeight( fRect.viewInfo, feature );

            return thisB.getStyle( feature, stylename ) || thisB.getStyle( parentFeature, stylename );
        }

        for( var i = 0; i < subfeatures.length; ++i ) {
            this.renderBox( context, fRect.viewInfo, subfeatures[i], fRect.t, fRect.rect.h, fRect.f, style );
        }
    }
}

});
});