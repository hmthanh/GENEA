"use server"

import DataSender from "@/webmushra/business/DataSender";
import ErrorHandler from "@/webmushra/business/ErrorHandler";
import PageManager from "@/webmushra/business/PageManager";
import Localizer from "@/webmushra/misc/Localizer";
import axios from "axios";
import dataConfig from "../../public/my_first_experiment/1234567.json"
import Session from "@/webmushra/datamodel/Session";
import PageTemplateRenderer from "@/webmushra/business/PageTemplateRenderer";


export async function fetchJSONStudy(url) {
    // const data = await axios.get("https://raw.githubusercontent.com/hmthanh/GENEA/main/public/my_first_experiment/1234567.json")
    // const config = data.data;
    // console.log("data", data)
    // const data = dataConfig;
    // const config = {}
    const config = dataConfig;
    // console.log(data)

    let errorHandler = new ErrorHandler();
    let pageManager = null
    let localizer = new Localizer();
    let dataSender = null;
    let session = null;
    let pageTemplateRenderer = null;
    let interval2 = null;


    if (config == null) {
        errorHandler.sendError("URL couldn't be found!");
        let errors = errorHandler.getErrors();
        return { status: -1, error: errors, config }
    }

    var nls = new Object();
    localizer.initializeNLSFragments(nls);
    pageManager = new PageManager("pageManager", "page_content", localizer);

    dataSender = new DataSender(config);

    session = new Session();
    session.testId = config.testId;
    session.userId = config.userId;
    session.config = url;

    if (config.language == undefined) {
        config.language = 'en';
    }

    pageTemplateRenderer = new PageTemplateRenderer(pageManager, config.showButtonPreviousPage, config.language);

    pageManager.addCallbackPageEventChanged(pageTemplateRenderer.refresh.bind(pageTemplateRenderer));

    addPagesToPageManager(pageManager, config.pages, session, config, errorHandler, dataSender);

    // callbackFilesLoaded(pageManager, pageTemplateRenderer, config, errorHandler)
    return { status: 1, error: null, config }

}