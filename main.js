'use strict';

const SAN_SERIF_FONT = 'BlinkMacSystemFont,-apple-system,"Helvetica Neue",Helvetica,Arial,sans-serif'
const SERIF_FONT = 'Interface,medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif'

function loadCustomFont () {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    // Sniffed from Medium, don't sue me pls I respect the font
    // link.setAttribute('href', 'https://cdn-static-1.medium.com/_/fp/css/fonts-base.by5Oi_VbnwEIvhnWIsuUjA.css')
    link.setAttribute('href', 'https://rsms.me/interface/interface.css')
    document.head.appendChild(link);
}

// Styling within the inbox
const selectedEmail = `{
    background: #F9F9E0 !important;
}`
const standardEmail = `{
    transition: all .25s ease-in-out;
    background: #fff !important;
}`
const standardEmailCell = `{
    border-bottom: 1px rgba(255, 255, 255, 0) solid !important;
}`


const emailBottomText = `{
    padding-bottom: 10px !important;
}`
const emailBottomTextParagraph = `{
    color: rgba(81, 81, 81, 0.45) !important;
    font-family: ${SAN_SERIF_FONT} !important;
    font-size: 90% !important;
}`
const emailHeaderText = `{
    font-size: 14px !important;
    font-weight: 600 !important;
    font-family: ${SAN_SERIF_FONT} !important;
    letter-spacing: -.25px;
    color: rgba(50, 56, 62, 0.9);
}`
const emailTopText = `{
    padding-top: 10px !important;
    color: rgba(81, 81, 81, 0.45) !important;
    font-family: ${SAN_SERIF_FONT} !important;
    font-size: 70% !important;
}`
// const labels = `{
//     overflow: hidden !important;
//     border-radius: 10px !important;
//     padding: 0 2px !important;
//     font-family: ${SAN_SERIF_FONT} !important;
//     font-size: 95% !important;
// }`
const unreadEmail = `{
    background: rgba(159, 159, 159, 0.05) !important;
}`
const unreadEmailLeftSide = `{
  content: "";
  height: 79px;
  width: 4px;
  position: absolute;
  background: #4683eb;
  left: 0;
  margin-top: -32px;
}`
const veryLeftSideCell = `{
    background: #fff !important;
    border-bottom: 1px solid #fff !important;
    border-top: 1px double #fff !important;
}`
// const rightSideStar = `{
//     top: 13px !important;
// }`


// Styling within emails
const header = `{
    font-family: ${SAN_SERIF_FONT} !important;
    font-weight: 600 !important;
    letter-spacing: -.25px !important;
    font-size: 24px !important;
    line-height: 30px !important;
    color: #32383E !important;
}`
const paragraph = `{
    font-family: ${SERIF_FONT} !important;
    font-size: 15px !important;
    color: #363738 !important;
    line-height: 24px !important;
}`
const fromHeader = `{
    font-family: ${SAN_SERIF_FONT} !important;
    color: #363738 !important;
}`
const sidePanel = `{
    display: none !important;
}`


// Left side panel
const leftSideCells = `{
    /* padding-top: 10px !important; */
    /* padding-bottom: 10px !important; */
    font-family: ${SAN_SERIF_FONT} !important;
}`
const leftSideSelectedCell = `{
    transition: all .1s ease-in-out;
}`

$(function () {
    console.log('%cG%cM%cA%cI%cL%c\tSit tight while we make things pretty...',
        'color: #4285f4',
        'color: #ea4335',
        'color: #fbbc05',
        'color: #4285f4',
        'color: #34a853',
        'color: #9CAFBE')

    loadCustomFont()

    // Inbox
    document.styleSheets[0].insertRule(`.aps ${selectedEmail}`, 0)
    document.styleSheets[0].insertRule(`.yO ${standardEmail}`, 0)
    document.styleSheets[0].insertRule(`.xY ${standardEmailCell}`, 0)

    document.styleSheets[0].insertRule(`.xY.apA, .xY.apE ${emailBottomText}`, 0)
    document.styleSheets[0].insertRule(`.y2 ${emailBottomTextParagraph}`, 0)
    document.styleSheets[0].insertRule(`.xY.apD ${emailHeaderText}`, 0)
    document.styleSheets[0].insertRule(`.xY.apy, .xY.apt, .xY.apx ${emailTopText}`, 0)

    document.styleSheets[0].insertRule(`.apw, .apC ${standardEmailCell}`, 0)
    // document.styleSheets[0].insertRule(`.as .at ${labels}`, 0)

    document.styleSheets[0].insertRule(`.zE ${unreadEmail}`, 0)
    document.styleSheets[0].insertRule(`.zE > .apo-x3.xY::after ${unreadEmailLeftSide}`, 0)

    document.styleSheets[0].insertRule(`.NQ, .aij ${leftSideSelectedCell}`, 0)
    document.styleSheets[0].insertRule(`.PF.PE ${veryLeftSideCell}`, 0)

    // document.styleSheets[0].insertRule(`td.apU .T-KT ${rightSideStar}`, 0)
    
    // Emails
    document.styleSheets[0].insertRule(`.hP ${header}`, 0)
    // document.styleSheets[0].insertRule(`.hx .ii ${paragraph}`, 0) // old
    document.styleSheets[0].insertRule(`.a3s.aXjCH ${paragraph}`, 0)

    document.styleSheets[0].insertRule(`h3.iw ${fromHeader}`, 0)
    document.styleSheets[0].insertRule(`h3.iw .gD ${fromHeader}`, 0)
    document.styleSheets[0].insertRule(`.hx .gH ${fromHeader}`, 0)
    document.styleSheets[0].insertRule(`.y3 ${sidePanel}`, 0)

    // Left side panel
    document.styleSheets[0].insertRule(`.TN ${leftSideCells}`, 0)
})
