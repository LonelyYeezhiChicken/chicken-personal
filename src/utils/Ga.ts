import ga4 from 'react-ga4'

const TRACKING_ID: string = 'G-23JXYZ7T1V'
const isProduction: boolean = false;

export const init = () => ga4.initialize(TRACKING_ID, {
    testMode: !isProduction
})

export const sendEvent = (name: string) => {
    console.log(name);
    ga4.event('screen_view', {
        app_name: "chicken say hi",
        screen_name: name,
    });
}

export const sendPageview = (path: string) => {
    console.log(path);
    ga4.send({
        hitType: 'pageview',
        page: path
    });
}
