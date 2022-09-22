import ga4 from 'react-ga4'

const TRACKING_ID: string = 'G-23JXYZ7T1V'
const isProduction: boolean = true;

export const init = () => ga4.initialize(TRACKING_ID, {
    testMode: !isProduction
})

export const sendEvent = (name: string) => {
    ga4.event('screen_view', {
        app_name: "chicken say hi",
        screen_name: name,
    });
}

export const sendPageview = (path: string) => {
    ga4.send({
        hitType: 'pageview',
        page: path
    });
}
