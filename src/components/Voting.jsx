import React from 'react';
import Winnder from './Winner';
import Vote from './Vote';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],

    render : function(){
       return <div>
           {this.props.winner?
                <Winnder ref="winner" winner={this.props.winner}/> :
               <Vote {...this.props} />}
       </div>;
    }
});