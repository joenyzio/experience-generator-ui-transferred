var mkstmt = function (opts) {
  var parts = {
    actor: {
      mbox: { mbox: "mailto:placeholder@fixme.com" },
      account: {
        account: {
          name: "accountname",
          homePage: "http://account.com/homepage",
        },
      },
    },
    verb: { id: "http://verb.com/id", display: { en: "verbed" } },
    object: {
      Activity: { id: "http://activity.com/id" },
      Agent: {
        objectType: "Agent",
        mbox: "mailto:placeholder@fixme.com",
      },
      StatementRef: {
        objectType: "StatementRef",
        id: "8f87ccde-bb56-4c2e-ab83-44982ef22df0",
      },
    },
  };

  var ret = {};
  var base = (editor.getValue() && JSON.parse(editor.getValue())) || {
    actor: parts.actor.mbox,
    verb: parts.verb,
    object: parts.object.Activity,
    timestamp: new Date().toISOString(),
  };

  if (!opts) return base;

  ret.actor = base.actor.hasOwnProperty(opts.actor)
    ? base.actor
    : parts.actor[opts.actor];
  ret.verb = base.verb || parts.verb;
  ret.object =
    (base.object.objectType ? base.object.objectType : "Activity") ===
    opts.object
      ? base.object
      : parts.object[opts.object];
  ret.timestamp = base.timestamp;

  for (var a in opts.result) {
    ret.result = ret.result || {};
    var att = opts.result[a];
    if (att === "scaled") {
      if (!ret.result.score) ret.result.score = {};
      ret.result.score.scaled =
        (base.result && base.result.score && base.result.score.scaled) || 0.95;
    } else if (att === "raw") {
      if (!ret.result.score) ret.result.score = {};
      ret.result.score.raw =
        (base.result && base.result.score && base.result.score.raw) || 95;
    } else if (att === "min") {
      if (!ret.result.score) ret.result.score = {};
      ret.result.score.min =
        (base.result && base.result.score && base.result.score.min) || 0;
    } else if (att === "max") {
      if (!ret.result.score) ret.result.score = {};
      ret.result.score.max =
        (base.result && base.result.score && base.result.score.max) || 100;
    } else if (att === "success") {
      ret.result.success = (base.result && base.result.success) || true;
    } else if (att === "completion") {
      ret.result.completion = (base.result && base.result.completion) || true;
    } else if (att === "response") {
      ret.result.response =
        (base.result && base.result.response) || "this is the response";
    } else if (att === "duration") {
      ret.result.duration = (base.result && base.result.duration) || "PT5H4M";
    } else if (att === "ext") {
      ret.result.extensions = (base.result && base.result.extensions) || {
        "http://ext.com/key": "value",
      };
    }
  }

  for (var a in opts.ctx) {
    ret.context = ret.context || {};
    var att = opts.ctx[a];
    if (att === "registration") {
      ret.context.registration =
        (base.context && base.context.registration) ||
        "ffbf6a38-00fb-405d-91ec-e455385cdaa8";
    } else if (att === "parent") {
      ret.context.contextActivities = ret.context.contextActivities || {};
      ret.context.contextActivities.parent = (base.context &&
        base.context.contextActivities &&
        base.context.contextActivities.parent) || [
        { id: "http://cxt.com/parent/0" },
      ];
    } else if (att === "grouping") {
      ret.context.contextActivities = ret.context.contextActivities || {};
      ret.context.contextActivities.grouping = (base.context &&
        base.context.contextActivities &&
        base.context.contextActivities.grouping) || [
        { id: "http://cxt.com/grouping/0" },
      ];
    } else if (att === "category") {
      ret.context.contextActivities = ret.context.contextActivities || {};
      ret.context.contextActivities.category = (base.context &&
        base.context.contextActivities &&
        base.context.contextActivities.category) || [
        { id: "http://cxt.com/category/0" },
      ];
    } else if (att === "other") {
      ret.context.contextActivities = ret.context.contextActivities || {};
      ret.context.contextActivities.other = (base.context &&
        base.context.contextActivities &&
        base.context.contextActivities.other) || [
        { id: "http://cxt.com/other/0" },
      ];
    } else if (att === "ext") {
      ret.context.extensions = (base.context && base.context.extensions) || {
        "http://ext.com/key": "value",
      };
    }
  }

  return ret;
};
