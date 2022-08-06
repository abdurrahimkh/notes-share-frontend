import QuickStackCard from "./QuickStackCard";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValues } from "../../../redux/features/document/documentAction";
import SideMenu from "../template/SideMenu";
import NavBar from "../template/NavBar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ValuesList from "./ValuesList";
const Values = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getValues());
  }, []);

  const values = useSelector(state => state.documents.values);

  const { universities, _id: unisId } = values[0] || {};
  const { fieldofstudy, _id: fieldId } = values[1] || {};
  const { subjects, _id: subjectId } = values[2] || {};
  return (
    <div className="grid grid-cols-6 md:grid-cols-10 gap-0 h-full">
      <div className="col-span-1 md:col-span-1 lg:col-span-2">
        <SideMenu />
      </div>
      <div className="col-span-5 md:col-span-9 lg:col-span-8 h-full">
        <div className="relative">
          <NavBar />
          <div className="overflow-y-auto h-screen flex flex-col">
            <div className="flex-shrink-0 p-5" style={{ marginTop: 72 }}>
              <div className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <QuickStackCard title="Universites" statics={14}>
                    <DocumentDuplicateIcon className="w-10 h-10 text-gray-400" />
                  </QuickStackCard>
                  <QuickStackCard title="Fields" statics={22}>
                    <DocumentDuplicateIcon className="w-10 h-10 text-gray-400" />
                  </QuickStackCard>
                  <QuickStackCard title="Subjects" statics={40}>
                    <DocumentDuplicateIcon className="w-10 h-10 text-gray-400" />
                  </QuickStackCard>
                </div>
                <Tabs>
                  <TabList>
                    <Tab>Universities</Tab>
                    <Tab>Fields</Tab>
                    <Tab>Subjects</Tab>
                  </TabList>
                  <TabPanel>
                    <ValuesList
                      title="Universities"
                      data={universities}
                      id={unisId}
                    />
                  </TabPanel>
                  <TabPanel>
                    <ValuesList
                      title="Fields"
                      data={fieldofstudy}
                      id={fieldId}
                    />
                  </TabPanel>
                  <TabPanel>
                    <ValuesList
                      title="Subjects"
                      data={subjects}
                      id={subjectId}
                    />
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
