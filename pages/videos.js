import Layout from '../components/Layout'
import { Player, Shortcut, BigPlayButton } from 'video-react'
import { FlexBox, Articles } from '../components/shared components'

export default class extends React.Component {
    state = {
        nameList: ["1", "2", "3", "Mix"],
        path: "../static/assets/Videos/",
        extension: ".mov"
    }

    newShortcuts = [
        // Press number 1 to jump to the postion of 10%
        {
            keyCode: 49, // Number 1
            // handle is the function to control the player
            // player: the player's state
            // actions: the player's actions
            handle: (player, actions) => {
                const duration = player.duration;
                // jump to the postion of 10%
                actions.seek(duration * 0.1);
            },
        },
        // Ctrl/Cmd + Right arrow to go forward 30 seconds
        {
            keyCode: 39, // Right arrow
            ctrl: true, // Ctrl/Cmd
            handle: (player, actions) => {
                if (!player.hasStarted) {
                    return;
                }

                // this operation param is option
                // helps to display a bezel
                const operation = {
                    action: 'forward-30',
                    source: 'shortcut',
                };
                actions.forward(30, operation); // Go forward 30 seconds
            },
        },
    ]

    render() {
        const { nameList, path, extension } = this.state
        return (
            <Layout>
                <Articles>
                    {
                        nameList.map((name, index) =>
                            <FlexBox key={`video-${index}`} justify='center' align='center' width="800px" style={{ marginBottom: 50 }} direction='column'>
                                <h2 style={{ marginLeft: 30 }}>{name}.mov</h2>
                                <Player src={`${path}${name}${extension}`}>
                                    <BigPlayButton position="center" />
                                    <Shortcut
                                        clickable={false}
                                        shortcuts={this.newShortcuts}
                                    />
                                </Player>
                            </FlexBox>
                        )
                    }
                </Articles>
            </Layout>
        )
    }
}