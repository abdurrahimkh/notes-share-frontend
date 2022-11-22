import QuickStackCard from "./QuickStackCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFields,
  getUniversities,
} from "../../../redux/features/document/documentAction";
import SideMenu from "../template/SideMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ValuesList from "./ValuesList";
import SubjectValues from "./SubjectValues";
import {
  FieldPagination,
  UniPagination,
} from "../../../redux/features/document/documentSlice";
import { subjectsList } from "../../../helpers/SubjectList";
import LoaderSm from "../../loader/LoaderSm";

const Values = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFields()).then(() => dispatch(FieldPagination()));
    dispatch(getUniversities()).then(() => dispatch(UniPagination()));
  }, []);

  const {
    fields: fieldofstudy,
    universities,
    filterUniversities,
    filterFields,
    isLoading,
  } = useSelector(state => state.documents);

  return (
    <div className="grid h-full grid-cols-6 gap-0 md:grid-cols-10 ">
      <div className="col-span-1 md:col-span-1 lg:col-span-2">
        <SideMenu />
      </div>
      <div className="col-span-5 h-full md:col-span-9 lg:col-span-8">
        <div className="relative">
          <div className="flex h-screen flex-col overflow-y-auto">
            <div className="flex-shrink-0 p-5">
              <div className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <QuickStackCard
                    title="Universites"
                    statics={filterUniversities && filterUniversities.length}
                  >
                    <i className="bi bi-bank2 text-4xl"></i>
                  </QuickStackCard>
                  <QuickStackCard
                    title="Fields"
                    statics={filterFields && filterFields.length}
                  >
                    <i className="bi bi-mortarboard text-4xl"></i>
                  </QuickStackCard>
                  <QuickStackCard
                    title="Subjects"
                    statics={subjectsList && subjectsList().length}
                  >
                    <i className="bi bi bi-book text-4xl"></i>
                  </QuickStackCard>
                </div>
                {isLoading ? (
                  <div className="flex h-[80vh]   items-center justify-center">
                    <LoaderSm />
                  </div>
                ) : (
                  <Tabs
                    selectedIndex={tabIndex}
                    onSelect={index => setTabIndex(index)}
                  >
                    <TabList>
                      <Tab>Universities</Tab>
                      <Tab>Fields</Tab>
                      <Tab>Subjects</Tab>
                    </TabList>
                    <TabPanel>
                      <ValuesList title="Universities" data={universities} />
                    </TabPanel>
                    <TabPanel>
                      <ValuesList title="Fields" data={fieldofstudy} />
                    </TabPanel>
                    <TabPanel>
                      <SubjectValues title="Subjects" data={fieldofstudy} />
                    </TabPanel>
                  </Tabs>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
